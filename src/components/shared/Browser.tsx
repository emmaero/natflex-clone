import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEpisode from "../../pages/AddEpisode";
import AddTitlePage from "../../pages/AddTitlePage";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
//Project files

// interface iProp {
//   isLogged: boolean;
// }
export default function Browser() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} exact path="/" />
        <Route component={SignUpPage} exact path="/sign-up" />
        <Route component={AddTitlePage} exact path="/admin" />
        <Route component={AddEpisode} exact path="/serie" />
      </Switch>
    </BrowserRouter>
  );
}
