const API_KEY_TMDb = 'f0b0b2303007a87e9939a71289ae05a6';
const TMDb_URL = 'https://api.themoviedb.org/3';

export const fetchPopularFilms = async () => {
    try {
        const res = await fetch(`${TMDb_URL}/movie/popular?api_key=${API_KEY_TMDb}&language=ru-RU&page=1`);
        const data = await res.json();
        return data.results
    } catch (error) {
        console.error('Ошибка', error)
        return [];
    }

}