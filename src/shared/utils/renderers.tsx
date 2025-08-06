import { MovieCard } from '../../features/movie/components/MovieCard';
import type { Movie } from '../../features/movie/types/movie.types';

export const renderMovie = (movie: Movie) => {
  return <MovieCard movie={movie} />;
};