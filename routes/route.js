const express =require('express');
const authRoute = require('./authRoute/index');
const pageroute = require('./pageRoute');
const { isAuthenticate } = require('../middlewares/auth/authmiddleware');
const route = express.Router();


route.use('/auth',authRoute);
route.use('/pages', isAuthenticate,pageroute);




module.exports=route;