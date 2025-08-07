import { Box } from "@mui/material";
import type { PopularMovieCardProps } from "features/popularFilms/types/types"
import styles from './PopularFilms.module.css'
import { PopularFilmTextBlock } from "../PopularFilmText/PopularFilmText";
import { GENRES } from "../../../../shared/lib/genres";



export const PopularFilmCard = ({ movie }: PopularMovieCardProps) => {
    const textBlocks = [
        { type: "label", content: "Лидеры просмотров", className: "label" },
        { type: "title", content: movie.title, className: "title" },
        { type: "rating", content: `Рейтинг: ${movie.vote_average}`, className: "rating" },
        { type: "overview", content: movie.overview, className: "overview" },
        { type: "genres", content: `Жанры: ${movie.genre_ids.map(id=>GENRES[id])}`, className: "genres" },
    ] as const;
    return (
        <Box
            className={styles.card}
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 80%), url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
            }}
        >
            {textBlocks.map((block, i) => (
                <PopularFilmTextBlock key={i} type={block.type} content={block.content} />
            ))}
        </Box >
    );
};