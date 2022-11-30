// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pastry', { title: 'Search Results Pastry' });
// });


// module.exports = router;

var express = require('express'); 
const pastry_controlers= require('../controllers/pastry'); 
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Pastry */ 
router.get('/', pastry_controlers.pastry_view_all_Page ); 

router.get('/update', secured, pastry_controlers.pastry_update_Page); 

module.exports = router; 