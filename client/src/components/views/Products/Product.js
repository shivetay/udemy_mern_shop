import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import Rating from '../../features/Ratings/Rating';

const Product = ({ productData }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${productData._id}`}>
        <Card.Img src={productData.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${productData._id}`}>
          <Card.Title as='div'>{productData.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={productData.rating}
            text={`${productData.numreviews} reviews`}
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
