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
 
/* GET Pastry */ 
router.get('/', pastry_controlers.pastry_view_all_Page ); 
module.exports = router; 