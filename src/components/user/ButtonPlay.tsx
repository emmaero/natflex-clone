import { useState } from "react";
import { Redirect } from "react-router-dom";

interface iProp {
  videoId: string;
}
export default function ButtonPlay({ videoId }: iProp) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={`/video/${videoId}`} />;
  }

  return (
    <button onClick={() => setRedirect(true)} className="play btn">
      <i className="fas fa-play"></i>
      Play
    </button>
  );
}
