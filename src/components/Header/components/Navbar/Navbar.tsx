import { routesConfig } from '@/config/routesConfig';
import { Box } from '@mui/material';


import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

export const Navbar = () => (

  <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    {routesConfig.map((route, index) =>
      route.mask ? (
        <NavLink
          key={index}
          to={route.mask}
          className={getLinkClassName}
        >
          {route.label}
        </NavLink>

      ) : null
    )}
  </Box>
);
