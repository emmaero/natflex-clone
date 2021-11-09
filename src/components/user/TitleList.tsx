import { iTitle } from "../../interfaces/iTitle";

interface iProp {
  list: iTitle[];
  ItemComponent: React.ElementType;
  label: string;
}
export default function TitleList({ list, ItemComponent, label }: iProp) {
  return (
      <>
          <h2>{label }</h2>
      <div className="title-wrapper">
        <section>
          <a href="#section3" className="arrow__btn">
            ‹
          </a>
          {list.map((item: iTitle) => (
            <ItemComponent key={item.id} item={item} />
          ))}
          <a href="#section1" className="arrow__btn">
            ›
          </a>
        </section>
      </div>
    </>
  );
}
