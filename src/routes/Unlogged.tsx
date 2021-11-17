import React from "react";
import { Route } from "react-router";
import LoginHelp from "../components/LoginHelp";
import AddEpisode from "../pages/AddEpisode";
import AddTitlePage from "../pages/AddTitlePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function Unlogged() {
  return (
    <>
      <Route component={LoginPage} exact path="/" />
      <Route component={SignUpPage} path="/sign-up" />
      <Route component={AddTitlePage} path="/admin" />
      <Route component={AddEpisode} path="/serie" />
      <Route component={LoginHelp} path="/login-help" />
    </>
  );
}
