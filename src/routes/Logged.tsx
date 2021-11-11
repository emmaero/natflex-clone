import { Route } from "react-router-dom";
import Home from "../components/user/Home";
import VideoPlayer from "../components/user/VideoPlayer";

export default function Logged() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/video/:videoId" component={VideoPlayer} />
    </>
  );
}
