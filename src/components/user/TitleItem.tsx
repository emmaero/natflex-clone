import { useHistory } from "react-router-dom";

import { iTitle } from "../../interfaces/iTitle";
import Type from "../../interfaces/titleType";
import { useModal } from "../../states/ModalProvider";
import ModalPreview from "./ModalPreview";

interface iProp {
  item: iTitle;
}
export default function TitleItem({ item }: iProp) {
  let history = useHistory();
  // Global state
  const { setModal } = useModal();

  const { thumbnail, category, titleLogoURL, title, videId, season1 } = item;

  let vidoeId = videId;
  if (category === Type.SERIE) {
    if (season1 !== undefined) vidoeId = season1[0];
  }
  function onPlay(videoId: string) {
    //@ts-ignore
    setModal(null);
    history.push(`/video/${videoId}`);
  }
  return (
    <div
      onClick={() =>
        //@ts-ignore
        setModal(
          <ModalPreview
            item={item}
            videoId={vidoeId}
            onPlay={onPlay}
            modalPlay={onPlay}
          />
        )
      }
      className="item"
    >
      <div className="title-image">
        <img src={titleLogoURL} alt={title} className="title-logo" />
        <img src={thumbnail} alt="Describe" />
      </div>
    </div>
  );
}
