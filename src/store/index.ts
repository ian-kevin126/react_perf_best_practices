import { memberReducer } from "./slices/MemberSlice";
import { hanbaoReducer } from "./slices/HanbaoSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    member: memberReducer,
    hanbao: hanbaoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppState = <T extends (state: RootState) => any>(
  selector: T
): ReturnType<T> => useSelector(selector);

export const useStore = () => store.getState() as RootState;

export default store;
