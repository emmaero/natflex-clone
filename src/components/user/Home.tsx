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
  const series = data.filter((item: iTitle) => item.category === Type.SERIE);
  const documentaries = data.filter(
    (item: iTitle) => item.category === Type.DOCUMENTARY
  );
  const hero = data.find((item: iTitle) => item !== undefined);

  return (
    <div className="home">
      {loading && <p>Loading ⏱</p>}
      {data && (
        <>
          <UserNavigation state={[query, setQuery]} />
          {query.trim().length <= 0 ? (
            <>
              <Hero item={hero} />
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
      {error === 2 && <p>Error</p>}
    </div>
  );
}
