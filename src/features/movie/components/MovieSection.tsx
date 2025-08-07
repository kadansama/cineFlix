import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchMoviesByType } from '../api/movieApi';
import type { MovieSectionProps } from '../types/movieSection.types';
import type { Movie } from '../types/movie.types';
import { MovieCarousel } from './MovieCarousel';

export const MovieSection = ({ sections, onMovieClick }: MovieSectionProps) => {
    const [moviesData, setMoviesData] = useState<Record<string, Movie[]>>({});
    const [loading, setLoading] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const loadAllMovies = async () => {
            const newLoading: Record<string, boolean> = {};
            const newMoviesData: Record<string, Movie[]> = {};

            // Инициализируем состояние загрузки для всех секций
            sections.forEach(section => {
                newLoading[section.type] = true;
            });
            setLoading(newLoading);

            // Загружаем фильмы для каждой секции
            const promises = sections.map(async (section) => {
                try {
                    const movies = await fetchMoviesByType(section.type);
                    newMoviesData[section.type] = movies;
                } catch (error) {
                    console.error(`Ошибка загрузки ${section.type}:`, error);
                    newMoviesData[section.type] = [];
                } finally {
                    newLoading[section.type] = false;
                }
            });

            await Promise.all(promises);
            setMoviesData(newMoviesData);
            setLoading(newLoading);
        };

        loadAllMovies();
    }, [sections]);

    return (
        <Box 
            sx={{ display: 'flex',
                flexDirection: 'column',
                gap: 4
            }}
        >
            {sections.map((section) => {
                const movies = moviesData[section.type] || [];
                const isLoading = loading[section.type];

                if (isLoading) {
                    return (
                        <Box key={section.type} sx={{ py: 2 }}>
                            Загрузка {section.title}...
                        </Box>
                    );
                }

                if (movies.length === 0) {
                    return (
                        <Box key={section.type} sx={{ py: 2 }}>
                            Нет данных для {section.title}
                        </Box>
                    );
                }

                return (
                    <MovieCarousel
                        key={section.type}
                        movies={movies}
                        title={section.title}
                        itemsPerView={section.itemsPerView || 4}
                        onMovieClick={onMovieClick}
                    />
                );
            })}
        </Box>
    );
};