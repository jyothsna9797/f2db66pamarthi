var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pastry_controller = require('../controllers/pastry'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// PASTRY ROUTES /// 
 
// POST request for creating a Pastry.  
router.post('/pastries', pastry_controller.pastry_create_post); 
 
// DELETE request to delete Pastry. 
router.delete('/pastries/:id', pastry_controller.pastries_delete); 
 
// PUT request to update Pastry. 
router.put('/pastries/:id', pastry_controller.pastry_update_put); 
 
// GET request for one Pastry. 
router.get('/pastries/:id', pastry_controller.pastry_detail); 
 
// GET request for list of all Pastry items. 
router.get('/pastries', pastry_controller.pastry_list); 
 
module.exports = router; 
 