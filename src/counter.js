import { createSlice } from "./toolkit";

// 为什么promise不写在reducer里面？
// 就跟纯函数一样
// 因为reducer 必须是纯函数 （1.没有副作用2.引用透明）

// { actions, reducer }
export default createSlice({
  name: "counter", // 切片id
  initialState: { number: 0 }, // 初始state
  reducers: {
    add: (state) => (state.number += 1), //派发的时候动作类型是 counter/add
    minus: (state, action) => (state.number -= action.payload), //派发的时候动作类型是 counter/minus
    asyncAdd: (state, { payload }) => (state.number = payload),
  },
});
