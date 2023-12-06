import produce from "immer";

// 在这里进行state的数据修改
function createReducer(initialState, reducers, extraReducers) {
  return function (state = initialState, action) {
    let reducer = reducers[action.type];

    if (reducer) {
      return produce(state, (draft) => {
        reducer(draft, action);
      });
    }

    let extraReducer = extraReducers[action.type];

    if (extraReducer) {
      return produce(state, (draft) => {
        extraReducer(draft, action);
      });
    }
    
    return state;
  };
}

export default createReducer;
