const mongoose = require('mongoose');

const db = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log('DB Connected');
    }).catch((err)=>{
        console.log('DB Connection Failed');
    });
}

module.exports=db;

