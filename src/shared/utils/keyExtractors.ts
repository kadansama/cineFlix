import type { Movie } from '../../features/movie/types/movie.types';

export const movieKeyExtractor = (movie: Movie) => movie.id;

export const genericKeyExtractor = <T>(_item: T, index: number) => index;