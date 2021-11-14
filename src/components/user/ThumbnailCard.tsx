interface iProp {
  videoId: string;
  index: number;
  onPlay: Function;
}
export default function ThumbnailCard({ videoId, index, onPlay }: iProp) {
  let youtubeThumbnail = require("youtube-thumbnail");

  let thumbnail = youtubeThumbnail(
    `https://www.youtube.com/watch?v=${videoId}`
  );
  let thumbnailImage = thumbnail.medium.url;

  return (
    <button onClick={() => onPlay(videoId)} className="episode-card">
      <div className="episode-thumbnail">
        <div className="number-thumbnail">{index + 1}</div>
        <img src={thumbnailImage} alt="" />
      </div>
      <div className="episode-text">
        <div className="space-flex">
          <h3 className="episode-title">Episode</h3>
          <div>22m</div>
        </div>
        <p>
          The description of the episode will be here assuming i created it on
          my api. I probably will go back to firestore to create it later. The
          object here is to get the frontend right.
        </p>
      </div>
    </button>
  );
}
