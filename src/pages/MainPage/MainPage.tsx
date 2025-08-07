import { useEffect, useState } from 'react';
import { MovieCarousel } from '../../features/movie/components/MovieCarousel';
import { fetchMovieTest } from '../../features/movie/api/movieApi';
import type { Movie } from '../../features/movie/types/movie.types';

export const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovieTest();
      setMovies(data);
    };
    loadMovies();
  }, []);

  const handleMovieClick = (movie: Movie) => {
    console.log('Клик по фильму:', movie.title);
  };

  return (
       <>
        <PopularFilmList/>
        <MovieCarousel
          movies={movies}
          title="Трендовые фильмы"
          itemsPerView={5}
          onMovieClick={handleMovieClick}
        />
      </>
  );
};

