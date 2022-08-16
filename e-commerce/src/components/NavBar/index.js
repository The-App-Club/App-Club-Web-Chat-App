import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledLogoImage = styled.img`
  margin-right: 10px;
  object-fit: contain;
  height: 25px;
`;
const StyledCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = ({ totalItems }) => {
  const location = useLocation();

  const renderCart = ({}) => {
    if (location.pathname === '/') {
      return (
        <StyledCartButton>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </StyledCartButton>
      );
    }
    return null;
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      // className={css`
      //   box-shadow: none;
      //   border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      //   width: 100%;
      // `}
      style={{
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        width: '100%',
      }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: '1 1 auto',
            textDecoration: 'none',
          }}
          // className={css`
          //   display: flex;
          //   justify-content: flex-start;
          //   align-items: center;
          //   flex: 1 1 auto;
          //   text-decoration: none;
          // `}
        >
          <StyledLogoImage src={logo} alt="commerce.js" />
          {' Commerce.js'}
        </Typography>

        {renderCart({})}
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
