import express from 'express';
import Product from '../models/product.model.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

/*
@description: get all products
@type GET
@route /api/products
@access public
*/
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

/*
@description: get one product
@type GET
@route /api/products/:id
@access public
*/
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
