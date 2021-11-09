import { useState } from "react";
import InputField from "../shared/InputField";
import option from "../../data/field-title.json";
import SelectFields from "../shared/SelectFields";
import Type from "../../interfaces/titleType";
import Uploader from "../shared/Uploader";
import parameter from "../../data/image-upload.json";
import TextArea from "../shared/TextArea";
interface iProps {
  onAdd: Function;
}
export default function TitleForm({ onAdd }: iProps) {
  const options = [Type.MOVIE, Type.SERIE, Type.DOCUMENTARY];
  const [title, setTitle] = useState("");
  const [videId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(options[1]);
  const [thumbnail, setThumbnail] = useState("");
  const [titleLogoURL, setTitleLogoURL] = useState("");
  const [backgoundURL, setbackgroundURL] = useState("");
  const thumbnailPath = `images/thumbnail-${title}.png`;
  const titleLogoImage = `images/logo-${title}.png`;
  const backgroundImage = `images/background-${title}.png`;
  function onSubmit(event: any) {
    event.preventDefault();
    const titleInfo = {
      title: title,
      description: description,
      category: category,
      thumbnail: thumbnail,
      titleLogoURL: titleLogoURL,
      backgoundURL: backgoundURL,
      videId: videId,
    };
    onAdd(titleInfo);
    reset();
  }
  function reset() {
    setTitle("");
    setDescription("");
    setThumbnail("");
    setVideoId("");
    setTitleLogoURL("");
    setbackgroundURL("");
  }
  return (
    <form className="form">
      <h1>Add title</h1>
      <InputField state={[title, setTitle]} options={option.title} />
      <TextArea
        state={[description, setDescription]}
        options={option.description}
      />
      <SelectFields
        state={[category, setCategory]}
        label="Category"
        options={options}
      />
      {category !== options[1] ? (
        <InputField state={[videId, setVideoId]} options={option.videoId} />
      ) : (
        ""
      )}
      <Uploader
        fileName={thumbnailPath}
        {...parameter.thumbnail}
        hook={[thumbnail, setThumbnail]}
      />
      <Uploader
        fileName={titleLogoImage}
        {...parameter.titleLogo}
        hook={[titleLogoURL, setTitleLogoURL]}
      />
      <Uploader
        fileName={backgroundImage}
        {...parameter.background}
        hook={[backgoundURL, setbackgroundURL]}
      />
      <button className="submit" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
