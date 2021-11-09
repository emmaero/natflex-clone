import React from 'react'
import { Route } from 'react-router';
import AddEpisode from '../pages/AddEpisode';
import AddTitlePage from '../pages/AddTitlePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

export default function Unlogged() {
    return (
      <>
        <Route component={LoginPage} exact path="/" />
        <Route component={SignUpPage} exact path="/sign-up" />
        <Route component={AddTitlePage} exact path="/admin" />
        <Route component={AddEpisode} exact path="/serie" />
      </>
    );
}
