import { useState } from "react";
import { iTitle } from "../../interfaces/iTitle";
import Type from "../../interfaces/titleType";
import { useModal } from "../../states/ModalProvider";
import ModalMetadata from "./ModalMetadata";
interface iProp {
  item: iTitle;
  modalPlay: Function;
}
export default function ModalPreview({ item, modalPlay }: iProp) {
  //Global state
  const { setModal } = useModal();

  const {
    thumbnail,
    backgoundURL,
    titleLogoURL,
    title,
    description,
    category,
  } = item;

  return (
    <div className="modal-preview">
      <div className="modal-preview-images">
        <img className="modal-image" src={backgoundURL} alt="generated image" />
        <img className="modal-title-logo" src={titleLogoURL} alt="</div>" />
        <div className="image-overlay"></div>
        <div className="modal-play">
          <button onClick={() => modalPlay()} className="play btn">
            <i className="fas fa-play"></i>
            Play
          </button>
        </div>
      </div>
      <div className="modal-description">
        <div className="description-content">
          <div className="videoMetadata">
            <div className="year">2004</div>
            <a href="#about">
              <span className="maturity-rating ">
                <span className="maturity-number">16+</span>
              </span>
            </a>
            <span className="duration">2 t</span>
            <span className="player-feature-badge">HD</span>
          </div>
          <p>{description}</p>
        </div>
        <ModalMetadata />
      </div>
    </div>
  );
}
