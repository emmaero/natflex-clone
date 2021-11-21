import { iTitle } from "../../interfaces/iTitle";
import TitleItem from "./TitleItem";

interface iProp {
  list: iTitle[];
  searchedTerm: string;
}

export default function Searched({ list, searchedTerm }: iProp) {
  // Readability, Nestinh -1
  // This code needs refactor is really hard to read withouth expending 5 minutes reading it
  // This make it prone to mistakes as bugs can be there, but unless you take a lot of time reading it, you will miss them.
  const searched = list
    .filter((val) => {
      if (searchedTerm === "") {
        return val;
      } else if (
        val.title.toLocaleLowerCase().includes(searchedTerm.toLocaleLowerCase())
      ) {
        return val;
      }
      return;
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
