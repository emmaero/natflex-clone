import { useState } from "react";
import useFetch from "../../customHook/useFetch";
import { iTitle } from "../../interfaces/iTitle";
import Type from "../../interfaces/titleType";

import Hero from "./Hero";
import TitleItem from "./TitleItem";
import TitleList from "./TitleList";

export default function Home() {
  const path = "title";
  const { data, loading, error } = useFetch(path);
  const top = data.slice(0, 10);
  const movies = data.filter((item: iTitle) => item.category === Type.MOVIE);
  const series = data.filter((item: iTitle) => item.category === Type.SERIE);
  const documentaries = data.filter(
    (item: iTitle) => item.category === Type.DOCUMENTARY
    );
    const hero = data.find((item:iTitle) => item !== undefined);

  return (
    <div className="home">
  
      {loading && <p>Loading ⏱</p>}
      {data && (
        <>
          <Hero item={hero} />
          <TitleList
            label="Top 10 in Sweden"
            list={top}
            ItemComponent={TitleItem}
          />
          <TitleList label="Movies" list={movies} ItemComponent={TitleItem} />
          <TitleList
            label="Documentaries"
            list={documentaries}
            ItemComponent={TitleItem}
          />
          <TitleList label="Series" list={series} ItemComponent={TitleItem} />
        </>
      )}
      {error === 2 && <p>Error</p>}
    </div>
  );
}
