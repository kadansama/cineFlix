import { MovieCard } from '../../features/movie/components/MovieCard';
import type { Movie } from '../../features/movie/types/movie.types';
import { PopularFilmCard } from '../../features/popularFilms/components/PopularFilmCard';
import type { PopularMovie } from '../../features/popularFilms/types/types';

export const renderMovie = (movie: Movie) => {
  return <MovieCard movie={movie} />;
};


export const renderPopularMovie = (movie: PopularMovie, _index: number) => {
  return <PopularFilmCard movie={movie} />;
};
