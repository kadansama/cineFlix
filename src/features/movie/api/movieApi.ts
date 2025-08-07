import type { MovieType } from '../types/movie.types';

const API_KEY_TMDb = 'f0b0b2303007a87e9939a71289ae05a6';
const TMDb_URL = 'https://api.themoviedb.org/3';

const endpoints = {
    'trending': '/trending/movie/week',
    'top-rated': '/movie/top_rated',
    'popular': '/movie/popular',
    'now-playing': '/movie/now_playing' 
};

export const fetchMoviesByType = async (type: MovieType) => {
    try {
        const endpoint = endpoints[type];  // Исправлено: endopoint → endpoint
        const res = await fetch(`${TMDb_URL}${endpoint}?api_key=${API_KEY_TMDb}&language=ru-RU`);  // Исправлено: {endopoint} → ${endpoint}
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (!data.results) {
            console.error('Неожиданная структура ответа:', data);
            return [];
        }
        
        return data.results;
    } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
        return [];
    }
};

export const fetchMovieTest = async () => {
    return fetchMoviesByType('trending');
};