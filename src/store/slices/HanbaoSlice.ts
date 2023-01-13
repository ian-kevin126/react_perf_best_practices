const { createSlice } = require("@reduxjs/toolkit");


const hanbaoSlice = createSlice({
    name:'hanbao',
    initialState:{
        id: 1,
        title:'佛跳墙汉堡',
        price:88,
        desc:'美味',
        img: '//////'
    },
    reducers: {
        setPrice(state:any,action:any){
            state.price = action.payload;
        }
    }
})

export const { setPrice } = hanbaoSlice.actions;
export const { reducer: hanbaoReducer } = hanbaoSlice;