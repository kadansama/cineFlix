export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: number;
}

export interface MovieCardProps {
    movie: Movie
}

export interface MovieListProps {
    movies: Movie[];
}