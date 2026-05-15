const express =require('express');
const {signUpcontroller,signIncontroller,registerUserController,signInUserController,logoutController,changePasswordController,passwordController} = require('../../controllers/auth/authController');
const { isLoggedIn } = require('../../middlewares/auth/authmiddleware');
const route = express.Router();

route.get('/sign-in',isLoggedIn,signIncontroller);
route.get('/sign-up',isLoggedIn,signUpcontroller);
route.post('/signInUser',signInUserController);
route.post('/registerUser',registerUserController);
route.get('/logout',logoutController);
route.get('/change-password', changePasswordController);
route.post('/change-password', passwordController);


module.exports=route