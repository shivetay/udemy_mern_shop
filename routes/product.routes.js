import express from 'express';
import { getProducts, getProductById } from '../controllers/product.controller';

const router = express.Router();

/*
@description: get all products
@type GET
@route /api/products
@access public
*/
router.get('/', getProducts);

/*
@description: get one product
@type GET
@route /api/products/:id
@access public
*/
router.get('/:id', getProductById);

export default router;
