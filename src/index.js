import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import rootReducer from "./reducers"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { getPosts } from "./actions/post.action"
import { getUsers } from "./actions/user.action";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
store.dispatch(getPosts());
store.dispatch(getUsers());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);
