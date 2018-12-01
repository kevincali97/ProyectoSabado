const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const morgan= require('morgan');
const productoRoutes= require('../app/routes/producto');

const app = express();
const session = require('express-session');
const userRoutes = require('../app/routes/users');






// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middlewares

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'secretsecret secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
    }))

//routes

app.use('/', userRoutes);
app.use('/', productoRoutes);

module.exports = app;