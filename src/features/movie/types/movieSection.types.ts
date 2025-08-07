import type { Movie } from './movie.types'
import type { MovieType } from './movie.types'

export interface MovieSectionConfig {
    type: MovieType;
    title: string;
    itemsPerView?: number; 
}

export interface MovieSectionProps {
    sections: MovieSectionConfig[];
    onMovieClick?: (movie: Movie) => void;
}