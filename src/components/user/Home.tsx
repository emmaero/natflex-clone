import { useState } from "react";
import useFetch from "../../customHook/useFetch";
import { iTitle } from "../../interfaces/iTitle";
import Type from "../../interfaces/titleType";
import Hero from "./Hero";
import Searched from "./Searched";
import TitleItem from "./TitleItem";
import TitleList from "./TitleList";
import UserNavigation from "./UserNavigation";

export default function Home() {
  const path = "title";
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(path);
  const top = data.slice(0, 10);
  const movies = data.filter((item: iTitle) => item.category === Type.MOVIE);
  const series = data.filter((item: iTitle) => item.category === Type.SERIE); // SERIES plural
  const documentaries = data.filter(
    (item: iTitle) => item.category === Type.DOCUMENTARY
  );
  const hero = data.find((item: iTitle) => item !== undefined);

  // safeguard
  // variable names -1
  if (error === 2) return <p>Error</p>; // why error === 2, that means error can be 0, 1 as well? Don't you mean status 0,1,2?

  return (
    <div className="home">
      {loading && <p>Loading ⏱</p>}
      {/* Refactoring -1, Nesting -1 */}
      {/* Look how complex this component is, you have a <> to either show the default home items or the search items */}
      {data && (
        <>
          <UserNavigation state={[query, setQuery]} />
          {query.trim().length <= 0 ? (
            <>
              <Hero item={hero} />
              {/* Refactoring -1 If all TitleList need the component TitleItem, why dont you imported there? */}
              {/* Making the component modular is only useful when you actually need to make changes */}
              <TitleList
                label="Top 10 in Sweden"
                list={top}
                ItemComponent={TitleItem}
              />
              <TitleList
                label="Movies"
                list={movies}
                ItemComponent={TitleItem}
              />
              <TitleList
                label="Documentaries"
                list={documentaries}
                ItemComponent={TitleItem}
              />
              <TitleList
                label="Series"
                list={series}
                ItemComponent={TitleItem}
              />
            </>
          ) : (
            <Searched list={data} searchedTerm={query} />
          )}
        </>
      )}
      {/* This could be an early return to make it nice see example above */}
      {error === 2 && <p>Error</p>}
    </div>
  );
}
