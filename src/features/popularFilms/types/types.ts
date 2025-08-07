export interface PopularMovie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string
    genre_ids: number[];

}

export interface PopularMovieCardProps {
    movie: PopularMovie
}

export interface PopularMovieMovieListProps {
    movies: PopularMovie[];
}