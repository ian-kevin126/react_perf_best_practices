import { createContext, useContext, useReducer, useState } from "react";
import * as userClient from "../user-client";
import { useAuth } from "../auth-context";

interface User {
  status: string;
  error: string;
  username: string;
  tagline: string;
  bio: string;
  storedUser: User;
  user: User;
}

const UserContext = createContext({} as User);
UserContext.displayName = "UserContext";

function userReducer(state: any, action: any) {
  switch (action.type) {
    case "start update": {
      return {
        ...state,
        user: { ...state.user, ...action.updates },
        status: "pending",
        storedUser: state.user,
      };
    }
    case "finish update": {
      return {
        ...state,
        user: action.updatedUser,
        status: "resolved",
        storedUser: null,
        error: null,
      };
    }
    case "fail update": {
      return {
        ...state,
        status: "rejected",
        error: action.error,
        user: state.storedUser,
        storedUser: null,
      };
    }
    case "reset": {
      return {
        ...state,
        status: null,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(userReducer, {
    status: null,
    error: null,
    storedUser: user,
    user,
  });

  const value = [state, dispatch];

  return (
    <UserContext.Provider value={value as any}>{children}</UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }

  return context;
}

async function updateUser(dispatch: any, user: User, updates: User) {
  dispatch({ type: "start update", updates });

  try {
    const updatedUser = await userClient.updateUser(user, updates);
    dispatch({ type: "finish update", updatedUser });
    return updatedUser;
  } catch (error) {
    dispatch({ type: "fail update", error });
    return Promise.reject(error);
  }
}

export { UserContext, userReducer, UserProvider, useUser, updateUser };
