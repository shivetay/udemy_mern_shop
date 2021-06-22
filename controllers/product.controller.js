import Product from '../models/product.model.js';
import asyncHandler from 'express-async-handler';

/*
@description: get all products
@type GET
@route /api/products
@access public
*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/*
@description: get one product
@type GET
@route /api/products/:id
@access public
*/
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProductById, getProducts };
