import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./states/AuthProvider";
import { UserProvider } from "./states/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
