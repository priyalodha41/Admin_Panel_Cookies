const express =require('express');
const {dashboardController,profileController,avatarController} = require('../../controllers/pages/pageController');
const { isAuthenticate } = require('../../middlewares/auth/authmiddleware');
const upload = require('../../middlewares/multer/multermiddleware');
const pageroute = express.Router();

pageroute.get('/dashboard', isAuthenticate, dashboardController);
pageroute.get('/profile', isAuthenticate, profileController);
pageroute.post('/profile/avatar', isAuthenticate, upload.single('avatar'), avatarController);

module.exports=pageroute;
