import { Link } from "react-router-dom";
import { iTitle } from "../../interfaces/iTitle";

import UserNavigation from "./UserNavigation";
interface iProp {
  item: iTitle;
}
export default function Hero({ item }: iProp) {
  if (item === undefined) return null;
  const { titleLogoURL, description, backgoundURL, videId: videoId } = item;
  return (
    <div className="wrapper">
      <header>
        <img className="hero-img" src={backgoundURL} alt="" />
       
        <div className="description">
          <img className="show-logo" src={titleLogoURL} alt="natflex" />
          <p>{description}</p>
          <Link to={`/video/${videoId}`} className="play btn">
            <i className="fas fa-play"></i> Play
          </Link>
          <a href="/" className="more btn">
            <i className="fa fa-plus"></i> More Info
          </a>
        </div>
      </header>
    </div>
  );
}
