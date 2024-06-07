import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import App from "./App.tsx";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const authStore = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider store={authStore}>
                <App />
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
