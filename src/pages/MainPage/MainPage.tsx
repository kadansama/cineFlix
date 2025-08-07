import { useEffect, useState } from 'react';
import { MovieSection } from '../../features/movie/components/MovieSection';
import { fetchMovieTest } from '../../features/movie/api/movieApi';
import type { Movie } from '../../features/movie/types/movie.types';
import { PopularFilmList } from '../../features/popularFilms/components/PopularFilmList';
import { movieSections } from '../../features/movie/config/movieSections.config';

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
        <MovieSection 
          sections={movieSections}
          onMovieClick={handleMovieClick}
        />
      </>
  );
};

