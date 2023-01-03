import React from "react";
import ReactDOM from "react-dom/client";
import "./components/style/style.scss";
import App from "./components/app/App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
