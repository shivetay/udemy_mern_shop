import express from 'express';
import { authUser, getProfile } from '../controllers/user.controller';
import { protect } from '../middleware/middleware';

const router = express.Router();

/*
@description: auth user & get token
@type POST
@route /api/users/login
@access public
*/
router.post('/login', authUser);
router.route('/profile', protect, getProfile);

export default router;
