const User = require("../../models/User/UserModel");

const dashboardController = async (req,res)=>{
    const {UserId} = req.cookies;
    const user = await User.findById(UserId);
    res.render('index', {user});
}
const profileController = async(req,res)=>{
    const {UserId} = req.cookies;
    const user = await User.findById(UserId);
    res.render('profile',{user});
}
const avatarController = async(req,res)=>{
    console.log(req.file.path);
    
    const {UserId} = req.cookies;
    console.log(UserId);
    const user = await User.findByIdAndUpdate(UserId, {avatar: req.file.filename});
    res.redirect('/pages/profile');
}
module.exports={dashboardController, profileController, avatarController};