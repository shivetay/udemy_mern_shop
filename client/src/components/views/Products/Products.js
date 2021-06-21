import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listProducts } from '../../../redux/productReducers';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <h1>Products Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Fragment>
          {products.map((product) => (
            <Product key={product._id} productData={product} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
