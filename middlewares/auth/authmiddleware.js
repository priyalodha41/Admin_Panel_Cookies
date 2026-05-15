isAuthenticate =(req,res,next)=>{
    if(req.cookies.UserId){
        next();    
    }else{
        res.redirect('/auth/sign-in?error=Please Sign In To Access This Page');
    }  
}

isLoggedIn= (req,res,next)=>{

    if(req.cookies.UserId){
        res.redirect('/pages/dashboard?error=You Are Already Logged In');
    }else{
        next();
    }
}
    
    module.exports={isAuthenticate,isLoggedIn};