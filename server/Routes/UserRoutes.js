const { completeProfile, DeleteUser, GetAllUsers, UpdateUser } = require('../Controllers/UserController');
const  protect  = require('../Middlewares/Auth.js');
const adminOnly = require('../Middlewares/AdminMiddleware.js');
const express = require("express");

const user_router = express.Router();

user_router.patch('/updateprofile',  protect, completeProfile);
user_router.delete('/deleteuser/:id', protect, DeleteUser);
user_router.get('/getallusers', protect, adminOnly, GetAllUsers);
user_router.patch('/updateuser/:id', protect, UpdateUser);

module.exports = user_router;