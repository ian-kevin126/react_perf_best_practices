//使用RTK构建store
import { getMenuList } from "@/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  list: [];
}

type MemberActions = {
  setUsername: (
    state: InitialState,
    action: PayloadAction<InitialState["username"]>
  ) => void;
  setEmail: (
    state: InitialState,
    action: PayloadAction<InitialState["email"]>
  ) => void;
};

const initialState: InitialState = {
  id: 1,
  username: "kawa",
  email: "123123@qq.com",
  confirmed: true,
  list: [],
};

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMenuListData = createAsyncThunk("menu/list", async () => {
  const res = await getMenuList();
  console.log("res", res);
  return res;
});

/**
 *  //我们在extraReducers中放入的是异步的方法，我们在action中声明的TT方法可以在此处使用
    //在此处我们可以监听创建好的异步action，此处有三个取值是比较常用的
   		1、fulfilled 成功之后需要做的操作
  		2、pending 加载时需要做的操作
  		3、rejected失败后需要做什么处理
 */
const memberSlice = createSlice<InitialState, MemberActions>({
  name: "member", // 会自动生成action中的type
  initialState: initialState,
  reducers: {
    //指定state的各种操作
    setUsername(
      state: InitialState,
      action: PayloadAction<InitialState["username"]>
    ) {
      // state是一个代理对象，可以直接修改
      state.username = action.payload;
    },
    setEmail(
      state: InitialState,
      action: PayloadAction<InitialState["email"]>
    ) {
      state.email = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMenuListData.pending, (state) => {
        console.log("请求中...");
      })
      .addCase(getMenuListData.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ fulfilled", payload);
        state.list = payload.data.menus;
      })
      .addCase(getMenuListData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err);
      });
  },
});

export const { setUsername, setEmail } = memberSlice.actions;
export default memberSlice.reducer;
