import { iTitle } from "../../interfaces/iTitle";
import TitleItem from "./TitleItem";

interface iProp {
  list: iTitle[];
  searchedTerm: string;
}

export default function Searched({ list, searchedTerm }: iProp) {
  const searched = list
    .filter((val) => {
      if (searchedTerm == "") {
        return val;
      } else if (
        val.title.toLocaleLowerCase().includes(searchedTerm.toLocaleLowerCase())
      ) {
        return val;
      }
    })
    .map((item: iTitle) => <TitleItem key={item.id} item={item} />);
  return (
    <section className="searched">
      {searched.length > 0 ? (
        searched
      ) : (
        <h2> {`${searchedTerm}  doesn't match any title`}</h2>
      )}
    </section>
  );
}
