import { FormEvent, useState } from "react";
import iInputFields from "../../interfaces/iInputListFields";

export default function InputFields({ options, state }: iInputFields) {
  const [videoId, setVideoId] = useState("");
  const [episodes, setEpisodes] = state;
  const { instructions, label, type } = options;

  function addVideo(event: FormEvent) {
    event.preventDefault();
    setEpisodes([...episodes, videoId]);
    setVideoId("");
  }
  return (
    <>
      {episodes.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div className="login__group">
        <input
          className="login__group__input"
          type={type}
          value={videoId}
          onChange={(event) => setVideoId(event.target.value)}
        />
        <button onClick={addVideo}>add</button>
        <label className="login__group__label">{label}</label>
        <p className="inputError">{instructions && instructions}</p>
      </div>
    </>
  );
}
