import { Route } from "react-router-dom";
import Home from "../components/user/Home";
import VideoPlayer from "../components/user/VideoPlayer";

// Good layout, in fact you are right, there should no be a way to create an account unless you logout first
export default function Logged() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/video/:videoId" component={VideoPlayer} />
    </>
  );
}
