import type { Movie } from './movie.types'

export interface MovieCarouselProps {
    movies: Movie[];
    title?: string;
    itemsPerView?: number;
    showArrows?: boolean;
    showDots?: boolean;
    onMovieClick?: (movie: Movie) => void;
}