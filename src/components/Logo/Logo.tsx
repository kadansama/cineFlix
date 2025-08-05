import { Link } from "react-router-dom"
import { Box, Typography } from '@mui/material';

import { routesMasks } from "../../config/routesMasks"
import logo from "../../components/icons/logo.svg"

export const Logo = () => {
    return (
        <Link to={routesMasks.main.mask}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={logo} alt="Логотип" height={50} />
                <Typography variant="h4" sx={{ color: 'var(--white)' }}>
                    CineFlix
                </Typography>
            </Box>
        </Link>
    )
}