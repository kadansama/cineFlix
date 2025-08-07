import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import type { MovieCardProps } from '../types/movie.types';

export const MovieCard = ({movie}: MovieCardProps) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <Card sx={{
            maxWidth: 280, 
            height: '100%', 
            display: 'flex', 
            flexDirection: 
            'column'}}>
            <CardMedia
                component="img"
                height="400"
                src={posterUrl}
                alt='постер'
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" noWrap>
                    {movie.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" noWrap>
                    {movie.release_date}
                </Typography>
            </CardContent>
        </Card>
    )
}