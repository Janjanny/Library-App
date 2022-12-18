//check if running in the production environment or not
if(process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}


//import express from the express library
const express = require('express');

//get the app portion
const app = express();

//get the express layouts package
const expressLayouts = require('express-ejs-layouts');

//import the router
const indexRouter = require('./routes/index');

//set the view engine and use ejs as view engine
app.set('view engine', 'ejs')

//set views where are coming from and put them inside the views directory
app.set('views', __dirname + '/views');

//hookup express layouts and set what layout file are going to be
app.set('layout', 'layouts/layout');

//use express layouts
app.use(expressLayouts);

//tell express where the public files are going to be
app.use(express.static('public'));


//setup mongodb, import mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
//chcek if we are connect to the database
const db = mongoose.connection;
//check for error
db.on('error', error => console.error(error));
//once we connect for the very first time run this
db.once('open', () => console.log('Connected to Mongoose'));


//tell the app to use the imported router
app.use('/', indexRouter);

//tell the app to listen on a certain port default to 3000
app.listen(process.env.PORT || 3000)

