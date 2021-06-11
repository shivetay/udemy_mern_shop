import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Fragment>
      {products.map((product) => (
        <Product key={product._id} productData={product} />
      ))}
    </Fragment>
  );
};

export default Products;
