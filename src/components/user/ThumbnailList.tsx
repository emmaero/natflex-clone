import React, { useState } from "react";
import { iTitle } from "../../interfaces/iTitle";
import SelectFields from "../shared/SelectFields";
import ThumbnailCard from "./ThumbnailCard";
interface iProp {
  series: iTitle;
  onPlay: Function;
}
export default function ThumbnailList({ series, onPlay }: iProp) {
  const [season, setSeason] = useState("0");
  const { season1, season2 } = series;
  // const [list, setList] = useState(Array<string>())
  const seasons = ["Season 1", "Season 2"];
  const list = season === "Season 1" ? season1 : season2;

  return (
    <div className="modal-episode">
      <div className="episode-header space-flex">
        <h2>Episodes</h2>
        <SelectFields state={[season, setSeason]} label="" options={seasons} />
      </div>
      {list.map((videoId: string, index: number) => (
        <ThumbnailCard onPlay={onPlay} key={index} index={index} videoId={videoId} />
      ))}
    </div>
  );
}
