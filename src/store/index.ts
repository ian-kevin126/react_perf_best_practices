import memberReducer from "./slices/MemberSlice";
import PokemonSlice from "./slices/PokemonSlice";
import menuReducer from "./slices/MemberSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    member: memberReducer,
    menu: menuReducer,
    // 将生成的 reducer 添加为特定的顶级切片
    [PokemonSlice.reducerPath]: PokemonSlice.reducer,
  },
  // 添加api中间件可以实现缓存、失效、轮询、和 `rtk-query` 的其他有用特性。
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonSlice.middleware),
});

// 可选，但对于 refetchOnFocus/refetchOnReconnect 行为是必需的
// 请参阅 `setupListeners` 文档 - 将可选的回调作为自定义的第二个参数
setupListeners(store.dispatch);

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

/** 进阶使用RTK Query（上面的写法是兼容了RTK）
 * 详情见：https://redux-toolkit.js.org/tutorials/rtk-query/
 * https://redux-toolkit.js.org/rtk-query/usage/examples
 
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

  
 */
