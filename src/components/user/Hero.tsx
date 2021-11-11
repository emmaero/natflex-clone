import { Link } from "react-router-dom";
import { iTitle } from "../../interfaces/iTitle";
import ButtonPlay from "./ButtonPlay";
import UserNavigation from "./UserNavigation";
interface iProp {
  item: iTitle;
}
export default function Hero({ item }: iProp) {
  if (item === undefined) return null;
  const { titleLogoURL, description, title, backgoundURL, videId:videoId } = item;
  return (
    <div className="wrapper">
      <header>
        <img className="hero-img" src={backgoundURL} alt="" />
        <UserNavigation />
        <div className="description">
          <img className="show-logo" src={titleLogoURL} />
          <p>{description}</p>
          <Link to={`/video/${videoId}`} className="play btn">
            <i className="fas fa-play"></i> Play
          </Link>
          <button className="more btn">
            <i className="fa fa-plus"></i> More Info
          </button>
        </div>
      </header>
    </div>
  );
}
