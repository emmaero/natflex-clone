import { BrowserRouter, Switch } from "react-router-dom";
import Logged from "../../routes/Logged";

import Unlogged from "../../routes/Unlogged";
//Project files

interface iProp {
  isLogged: boolean;
}
export default function Browser({isLogged}:iProp) {
  return (
    <BrowserRouter>
      <Switch>
        {isLogged ? <Logged /> : <Unlogged />}
      </Switch>
    </BrowserRouter>
  );
}
