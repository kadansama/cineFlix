import type { Movie } from '../../features/movie/types/movie.types';

import type {PopularMovie} from '../../features/popularFilms/types/types'

export const movieKeyExtractor = (movie: Movie) => movie.id;

export const genericKeyExtractor = <T>(_item: T, index: number) => index;

export const popularMovieKeyExtractor = (popularMovie: PopularMovie) => popularMovie.id;