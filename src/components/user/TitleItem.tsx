import { Redirect, useHistory } from "react-router-dom";
import { iTitle } from "../../interfaces/iTitle";
import { useModal } from "../../states/ModalProvider";
import ModalPreview from "./ModalPreview";

interface iProp {
  item: iTitle;
}
export default function TitleItem({ item }: iProp) {
  let history = useHistory();
  // Global state
  const { setModal } = useModal();

  const { thumbnail, backgoundURL, titleLogoURL, title, videId } = item;

  function onPlay() {
    //@ts-ignore
    setModal(null);
    history.push(`/video/${videId}`);
  }
  return (
    <div
      //@ts-ignore
      onClick={() => setModal(<ModalPreview item={item} modalPlay={onPlay} />)}
      className="item"
    >
      <div className="title-image">
        <img src={titleLogoURL} alt={title} className="title-logo" />
        <img src={backgoundURL} alt="Describe Image" />
      </div>
    </div>
  );
}
