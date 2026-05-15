const multer =require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,next){
        next(null,'./public/uploads'); 
    },

    filename: function(req,file,next){
        const fileprefix = Date.now() + '_' + file.originalname;
        next(null,fileprefix);
    }
}); 

const upload = multer({storage});

module.exports = upload;