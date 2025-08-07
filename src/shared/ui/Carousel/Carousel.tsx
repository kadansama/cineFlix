import { useRef, useEffect, useState } from 'react';
import type { CarouselProps } from '../../types/carousel.types';
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        const containerWidth = wrapperRef.current.offsetWidth;
        const totalGap = gap * (itemsPerView - 1);
        const computedItemWidth = (containerWidth - totalGap) / itemsPerView;
        setItemWidth(computedItemWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [itemsPerView, gap]);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: itemWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -(itemWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box ref={wrapperRef} sx={{ width: '100%', position: 'relative' }}>
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

      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          gap: `${gap}px`,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          height: height
        }}
      >
        {items.map((item, index) => (
          <Box
            key={keyExtractor(item, index)}
            sx={{
              flex: `0 0 ${itemWidth}px`
            }}
          >
            {renderItem(item, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
