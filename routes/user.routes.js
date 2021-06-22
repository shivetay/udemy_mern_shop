import express from 'express';
import { authUser } from '../controllers/user.controller';

const router = express.Router();

/*
@description: auth user & get token
@type POST
@route /api/users/login
@access public
*/
router.post('/login', authUser);

export default router;
