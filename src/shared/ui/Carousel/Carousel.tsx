import { useRef } from 'react';
import type { CarouselProps } from '../../types/carousel.types'
import { Box, IconButton } from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon 
} from '@mui/icons-material';

export const Carousel = <T,>({
  items,
  renderItem,
  keyExtractor,
  itemsPerView = 4,
  gap = 6,
  height = 400
}: CarouselProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 280 + gap,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -(280 + gap),
        behavior: 'smooth'
      });
    }
  };

  const containerWidth = itemsPerView * 280 + (itemsPerView - 1) * gap;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Стрелки - фиксированная позиция */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Контейнер с прокруткой - независимый */}
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          gap: gap,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          height: height,
          maxWidth: containerWidth
        }}
      >
        {items.map((item,index) => (
          <Box
            key={keyExtractor(item, index)}
            sx={{
              minWidth: 280,
              flexShrink: 0
            }}
          >
            {renderItem(item,index)}
          </Box>
        ))}
      </Box>
    </Box>
  )
}