import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import postList from "./components/PostList";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <Provider store={postList}>
        <App />
    </Provider>,
    document.getElementById("root")
);
