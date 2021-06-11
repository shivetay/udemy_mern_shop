import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import Raiting from '../../features/Ratings/Raiting';

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
          <Raiting
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
