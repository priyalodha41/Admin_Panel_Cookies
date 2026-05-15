const User = require('../../models/User/UserModel');
const bcrypt = require('bcrypt');


const signIncontroller = (req,res)=>{
    res.render('sign-in');
}   
const signUpcontroller = (req,res)=>{
    res.render('sign-up');
}

const signInUserController = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if(!user){
        return res.redirect('/auth/sign-in?error=User Not Found');
    }
     await bcrypt.compare(req.body.password, user.password,(err,result)=>{
         if(result){
            res.cookie('UserId', user._id);
             return res.redirect('/pages/dashboard?success=User Signed In Successfully');
            } 
            return res.redirect('/auth/sign-in?error=Invalid Password');
     });
}

const registerUserController = async (req, res) => {
    try {
        
        let hashPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = hashPassword;
        console.log(req.body);

        const user = await User.create(req.body); 
        res.redirect('/auth/sign-in?success=User Registered Successfully');

    } catch (err) {
        console.log(err);
        res.redirect('/auth/sign-up?error=User Already Exists');
    }
};

const logoutController = (req,res)=>{
    res.clearCookie('UserId');
    res.redirect('/auth/sign-in?success=User Logged Out Successfully');
}
const changePasswordController = async(req,res)=>{
     const {UserId} = req.cookies;
    const user = await User.findById(UserId);
    res.render('change-password', {user});

}
const passwordController = async (req,res)=>{
    try {
        let user = await User.findById(req.cookies.UserId);
        if(!user){
            return res.redirect('/auth/sign-in?error=User Not Found');
        }  
        await bcrypt.compare(req.body.oldPassword, user.password, async (err, result) => {
            if (result) {
                if(req.body.newPassword !== req.body.confirmPassword){
                    return res.redirect('/auth/change-password?error=New Password And Confirm New Password Must Be Same');
                }   
                else{
                let hashPassword = await bcrypt.hash(req.body.newPassword, 12); 
                await User.findByIdAndUpdate(req.cookies.UserId, { password: hashPassword });
                res.clearCookie('UserId');
                return res.redirect('/auth/sign-in?success=Password Changed Successfully, Please Sign In Again');
                }
            }
            return res.redirect('/auth/change-password?error=Invalid Old Password');
        });
    }catch (err) {
        console.log(err);
        res.redirect('/auth/sign-in?error=Something Went Wrong');
    }
}

module.exports={signIncontroller,signUpcontroller,registerUserController,signInUserController,logoutController,changePasswordController,passwordController};
