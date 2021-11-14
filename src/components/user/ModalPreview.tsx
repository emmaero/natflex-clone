import { iTitle } from "../../interfaces/iTitle";
import Type from "../../interfaces/titleType";
import ModalMetadata from "./ModalMetadata";
import ThumbnailList from "./ThumbnailList";
interface iProp {
  item: iTitle;
  modalPlay: Function;
  onPlay: Function;
  videoId: string;
}
export default function ModalPreview({
  item,
  modalPlay,
  onPlay,
  videoId,
}: iProp) {
  //Global state
  const { backgoundURL, titleLogoURL, description, category } = item;

  return (
    <div className="modal-preview">
      <div className="modal-preview-images">
        <img className="modal-image" src={backgoundURL} alt="generated" />
        <img className="modal-title-logo" src={titleLogoURL} alt="</div>" />
        <div className="image-overlay"></div>
        <div className="modal-play">
          <button onClick={() => modalPlay(videoId)} className="play btn">
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
      {category === Type.SERIE ? (
        <ThumbnailList onPlay={onPlay} series={item} />
      ) : (
        ""
      )}
    </div>
  );
}
