import Type from "./titleType";

export interface iTitle {
  id: string;
  thumbnail: string;
  titleLogoURL: string;
  title: string;
  backgoundURL: string;
  videId: string;
  description:string;
  category: Type;
}
