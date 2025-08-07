import { useEffect, useState } from "react";
// import { PopularFilmCard } from "../PopularFilmCard";
import { fetchPopularFilms } from "../../api/fetchPopularFilms";
import type { PopularMovie } from "../../types/types";
import { Carousel } from "../../../../shared/ui/Carousel/Carousel";
import { popularMovieKeyExtractor, renderPopularMovie } from "../../../../shared/utils";

export const PopularFilmList = () => {
  const [films, setFilms] = useState<PopularMovie[]>([]);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const data = await fetchPopularFilms();
        setFilms(data);
      } catch (e) {
        console.log('Ошибка при загрузке фильмов');
      }
    };

    loadFilms();
  }, []);

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {/* {films.map(movie => (
        <PopularFilmCard key={movie.id} movie={movie} />
      ))} */}
      {/* {films.length > 0 && <PopularFilmCard key={films[0].id} movie={films[0]} />} */}
      <Carousel
        items={films}
        itemsPerView = {1}
        renderItem={renderPopularMovie}
        keyExtractor={popularMovieKeyExtractor}
        height={800}
      ></Carousel>
    </div>
  )
}