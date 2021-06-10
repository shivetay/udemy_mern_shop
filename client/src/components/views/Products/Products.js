import React, { Fragment } from 'react';

import Product from './Product';

import products from '../../../products';

const Products = () => {
  return (
    <Fragment>
      {products.map((product) => (
        <Product productData={product} />
      ))}
    </Fragment>
  );
};

export default Products;
