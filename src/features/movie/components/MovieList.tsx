import { Box } from '@mui/material';
import { MovieCard } from './MovieCard';
import type { MovieListProps } from '../types/movie.types'

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: 2
    }}>
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </Box>
  )
}