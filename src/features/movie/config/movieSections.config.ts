import type { MovieSectionConfig } from '../types/movieSection.types';

export const movieSections: MovieSectionConfig[] = [
  {
    type: 'trending',
    title: 'Трендовые фильмы',
    itemsPerView: 5
  },
  {
    type: 'top-rated',
    title: 'Топ 10 лучших фильмов',
    itemsPerView: 5
  },
//   {
//     type: 'popular',
//     title: 'Популярные фильмы',
//     itemsPerView: 5
//   },
  {
    type: 'now-playing',
    title: 'Сейчас в кино',
    itemsPerView: 5
  }
];