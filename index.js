const express =require('express');
const app =express();
const dotenv=require('dotenv');
const routes =require('./routes/route')
const db = require('./config/db');
const cookieParser = require('cookie-parser');

dotenv.config();

app.use(cookieParser());
db();
const port = process.env.PORT || 6000;
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.use('/', routes);

app.use(express.static('public'));
app.use(express.static('uploads'));

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is running on http://localhost:${port}`);
    }
});