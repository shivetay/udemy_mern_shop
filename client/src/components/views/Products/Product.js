import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import Rating from '../../features/Ratings/Rating';

const Product = ({ productData }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${productData._id}`}>
        <Card.Img src={productData.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${productData._id}`}>
          <Card.Title as='div'>{productData.name}</Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating
            value={productData.rating}
            text={`${productData.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text>
          <h3>${productData.price}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  productData: PropTypes.object,
};

export default Product;
