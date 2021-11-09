import { iTitle } from "../../interfaces/iTitle";

interface iProp {
  item: iTitle;
}
export default function TitleItem({ item }: iProp) {
       const { thumbnail, titleLogoURL, title, videoId } = item;
  return (
    <div className="item">
      <img
        src={thumbnail}
        alt="Describe Image"
      />
    </div>
  );
}
