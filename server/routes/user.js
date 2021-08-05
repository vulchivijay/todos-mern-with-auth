const express = require('express');
const router = express.Router();

// import controller
const { requireSignin } = require('./../controllers/auth');
const { readuser, updateuser } = require('./../controllers/user.js');

// import validators

// route paths
router.get('/user/:id', requireSignin, readuser);
router.put('/user/update', requireSignin, readuser);


module.exports = router; // default empty object