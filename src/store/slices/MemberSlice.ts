//使用RTK构建store
import { createSlice } from "@reduxjs/toolkit"

const memberSlice = createSlice({
    name: 'member',// 会自动生成action中的type
    initialState: { // init的state
        id: 1,
        username: 'kawa',
        email: '123123@qq.com',
        confirmed: true
    },
    reducers: {//指定state的各种操作
        setUsername(state:any, action:any) { // state是一个代理对象，可以直接修改
            state.username = action.payload;
        },
        setEmail(state:any, action:any) {
            state.email = action.payload;
        }
    }
})

export const { setUsername, setEmail } = memberSlice.actions;
export const { reducer: memberReducer } = memberSlice;