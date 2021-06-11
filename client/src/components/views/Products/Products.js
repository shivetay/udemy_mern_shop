import React, { Fragment } from 'react';

import Product from './Product';

import products from '../../../products';

const Products = () => {
  return (
    <Fragment>
      {products.map((product) => (
        <Product key={product._id} productData={product} />
      ))}
    </Fragment>
  );
};

export default Products;
