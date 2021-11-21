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
          /**
           * Function arguments with more than 3 arguments -1
           *
           * Error 1: Why the videoId is not inside the item object?
           *
           * Error 2:
           * Why you need to pass the prop onPlay twice?: on onPlay and on modalPlay.
           * You could pass the onPlay once in a prop called action or onClick, etc.
           *
           * Passing it twice would make sense if you import ModalPreview on multiple parts of the program
           * and on those parts onPlay is onPlay={onPlay} but modalPlay is modalPlay={onStop}
           * but a quick search shows me that ModalPreview is only used here on  TitleItem
           */
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
