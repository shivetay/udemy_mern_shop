import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

import generateToken from '../utils/genToken.js';

/*
@description: auth user & get token
@type POST
@route /api/users/login
@access public
*/
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalide user or password');
  }
});

/*
@description: get user profile
@type GET
@route /api/users/profile
@access private
*/
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById();
});

export { authUser, getProfile };
