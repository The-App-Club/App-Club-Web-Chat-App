import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <Card
      style={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <CardMedia
        image={product.media.source}
        title={product.name}
        style={{
          height: 0,
          paddingTop: '56.25%',
        }}
      />
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { Product };
