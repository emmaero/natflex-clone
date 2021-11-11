import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { iTitle } from "../../interfaces/iTitle";
type PropParams = {
  videoId: string;
};
export default function VideoPlayer() {
  const { videoId } = useParams<PropParams>();
  //@ts-ignore
  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} {...opts} onReady={onReady} />;
}
