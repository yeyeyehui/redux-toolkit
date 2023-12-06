import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";

import App from "./App";

// redux 状态管理 核心包
// redux-logger 日志中间件
// redux-thunk 函数中间件
// @reduxjs/toolkit 工具包

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
