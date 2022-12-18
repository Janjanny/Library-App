//import express again 
const express = require('express');

//get the router portion of the express variable
const router = express.Router();

//create a route
router.get('/', (req, res) => {
   res.render("index");
})

//export the router
module.exports = router;