import type { MovieCarouselProps } from '../types/movieCarouselProps.types'
import Typography from '@mui/material/Typography';
import { renderMovie, movieKeyExtractor } from '../../../shared/utils';
import {Carousel} from '../../../shared/ui/Carousel/Carousel'

export const MovieCarousel = ({
  movies,
  title,
  itemsPerView = 4,
  showArrows = true,
  showDots = true,
  onMovieClick 
}: MovieCarouselProps) => {
  return (
    <div>
      {title && (
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}

      <Carousel 
        items={movies}
        renderItem={renderMovie}
        keyExtractor={movieKeyExtractor}
        itemsPerView={itemsPerView}
        showArrows={showArrows}
        showDots={showDots}
        onItemClick={onMovieClick}
      />
    </div>
  )
}
