import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import { Product } from '../Product';

const Products = ({ products, onAddToCart }) => {
  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <main
      className={css`
        padding: 120px 3vw 0;
        @media screen and (max-width: 768px) {
          padding: 70px 3vw 0;
        }
      `}
    >
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export { Products };
