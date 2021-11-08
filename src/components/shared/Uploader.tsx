import { FormEvent } from "react";
import { uploadFile } from "../../scripts/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/readImage";
import resizeImage from "../../scripts/upload-image/resizeImage";
// Interface
interface iProps {
  fileName: string;
  label: string;
  width: number;
  height: number;
  hook: any;
}
export default function Uploader({
  fileName,
  width,
  height,
  label,
  hook,
}: iProps) {
  // Local
  const [myImageURL, setMyImageURL] = hook;
  // Methods
  async function onImageChange(event: FormEvent) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const filename = fileName;

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, width, height);
    const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

    const fileUpload = await uploadFile(filename, finalImage);

    setMyImageURL(fileUpload);
  }
  return (
    <>
      <b>Upload {label}:</b>
      <label className="custom-file-chooser">
        <input
          accept="image/gif, image/jpeg, image/png"
          onChange={(event) => onImageChange(event)}
          type="file"
        />
        {myImageURL !== "" ? (
          <img src={myImageURL} alt="User generated content" />
        ) : (
          ""
        )}
      </label>
    </>
  );
}
