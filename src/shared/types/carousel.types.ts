import type { ReactNode } from 'react';

export interface CarouselProps<T> {
  // Основные данные
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  
  // Настройки отображения
  itemsPerView?: number;
  itemsPerScroll?: number;
  gap?: number;
  height?: number | string;
  
  // Настройки карусели
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  
  // Callback функции
  onItemClick?: (item: T) => void;
  onSlideChange?: (index: number) => void;
}