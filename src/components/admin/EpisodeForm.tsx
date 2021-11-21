import { FormEvent, useState } from "react";
import useFetch from "../../customHook/useFetch";
import { iTitle } from "../../interfaces/iTitle";
import InputField from "../shared/InputField";
import SelectFields from "../shared/SelectFields";
import option from "../../data/field-title.json";
import Type from "../../interfaces/titleType";
import { getDocument, updateDocument } from "../../scripts/firestore";

export default function EpisodeForm() {
  const [serie, setSerie] = useState("");
  const [season, setSeason] = useState("1");
  const [videoId, setVideoId] = useState("");
  const [episodes, setEpisodes] = useState(Array<string>());
  const seasons = ["", "season1", "season2"];
  const { data } = useFetch("title");
  const shows = data.filter((item: iTitle) => item.category === Type.SERIE);
  const serieTitles = shows.map((item: iTitle) => item.title);
  function getId(list: iTitle[], title: string) {
    const item = list.find((item) => item.title.trim() === title.trim());
    return item?.id;
  }
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const id = getId(shows, serie);
    const path = `title`;
    let title;
    if (id !== undefined) {
      title = await getDocument(path, id);
      const titleInfo = { ...title, [season]: episodes };
      await updateDocument(path, id, titleInfo);
    }

    setEpisodes(Array<string>());
    alert("Episodes add");
  }
  function addVideo(event: FormEvent) {
    event.preventDefault();
    if (videoId.trim() !== "") setEpisodes([...episodes, videoId]);
    setVideoId("");
  }

  return (
    <form>
      <SelectFields
        state={[serie, setSerie]}
        label="Select serie"
        options={serieTitles}
      />
      <SelectFields
        state={[season, setSeason]}
        label="Select season"
        options={seasons}
      />
      {episodes.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <InputField state={[videoId, setVideoId]} options={option.title} />
      <button onClick={addVideo}>add</button>
      <button onClick={onSubmit} className="submit">
        Add episode
      </button>
    </form>
  );
}
