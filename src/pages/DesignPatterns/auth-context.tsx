import { createContext, useContext } from "react";

// normally this is going to implement a similar pattern
// learn more here: https://kcd.im/auth

const AuthContext = createContext({
  user: { username: "jakiechan", tagline: "", bio: "" },
});

AuthContext.displayName = "AuthContext";

const AuthProvider = ({ user, ...props }) => {
  console.log("12121");
  return <AuthContext.Provider value={user} {...props} />;
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
