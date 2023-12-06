// applyMiddleware 这里调用createStore进行store的创建
// combineReducers 把多个reducers合并成一个reducer
// compose 是链式调用的方法，把上一个中间件的值给下一个中间件使用
// createStore 创建store上下文
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// 回调处理异步
import thunk from "redux-thunk";

// 判断是不是对象
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) return false;
  //let obj = new Object(); let obj = {}
  return Object.getPrototypeOf(value) === Object.prototype;
}
// 配置toolkit store仓库
function configureStore(options = {}) {
  let { reducer, middleware = [thunk], preloadedState } = options;

  let rootReducer;

  // 如果是函数，直接用，如果是对象代表需要合并
  if (typeof reducer === "function") rootReducer = reducer;
  else if (isPlainObject(reducer)) rootReducer = combineReducers(reducer);

  // 中间件
  middleware =
    typeof middleware === "function" ? middleware(() => [thunk]) : middleware;

  // 链式调用的方法，把上一个中间件的值给下一个中间件使用
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export default configureStore;
