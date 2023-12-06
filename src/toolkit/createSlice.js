import { createAction, createReducer } from "./";

// 创建redux切片，一个分片就是一个对象
function createSlice(options) {
  const { name, initialState, reducers = {}, extraReducers = {} } = options;

  let actions = {};

  // {counter/add: state => state.number += 1, counter/minus: (state, action) => state.number -= action.payload}
  let prefixReducers = {};

  // 拼接name和方法名：counter/add counter/minus
  Object.keys(reducers).forEach(function (key) {
    // counter/add
    let type = getType(name, key); 

    // functon actionCreateor(){return {type:'counter/add'}}
    // AOP。增加type类型，提供调用
    actions[key] = createAction(type);

    prefixReducers[type] = reducers[key];
  });

  let reducer = createReducer(initialState, prefixReducers, extraReducers);

  return {
    actions,
    reducer,
  };
}

// 拼切 片名称和redux方法
function getType(slice, actionKey) {
  return slice + "/" + actionKey;
}

export default createSlice;

/**
 * 其实为了区分 不同分片的动作类型
 * 不同的分片，它的动作可以是一样的
 * name指的是命名空间
 *  functon actionCreateor(){return {type:'counter/add'}}
 */
