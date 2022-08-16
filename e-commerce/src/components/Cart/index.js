import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

import CartItem from '../CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        {'You have no items in your shopping cart,'}
        <Link
          className={css`
            text-decoration: none;
          `}
          to="/"
        >
          {'start adding some'}
        </Link>
        {'!'}
      </Typography>
    );
  };

  if (!cart.line_items) {
    return <p>{'Loading...'}</p>;
  }

  const renderCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            </Grid>
          ))}
        </Grid>
        <div
          className={css`
            display: flex;
            justify-content: center;
            margin-top: 10px;
            width: 100%;
          `}
        >
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
            <Button
              className={css`
                min-width: 150px;
                margin-right: 20px;
                @media screen and (max-width: 768px) {
                  margin-bottom: 5px;
                }
              `}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty cart
            </Button>
            <Button
              className={css`
                min-width: 150px;
              `}
              component={Link}
              to="/checkout"
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        className={css`
          padding: 120px 0 0;
          @media screen and (max-width: 768px) {
            padding: 70px 0 0;
          }
        `}
      >
        {'Your Shopping Cart'}
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export { Cart };
