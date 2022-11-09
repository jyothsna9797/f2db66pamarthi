var Pastry = require('../models/pastry'); 
 
// List of all Pastry 
exports.pastry_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pastry list'); 
}; 
 
// for a specific Pastry. 
exports.pastry_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pastry detail: ' + req.params.id); 
}; 
 
// Handle Pastry create on POST. 
exports.pastry_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pastry create POST'); 
}; 
 
// Handle Pastry delete form on DELETE. 
exports.pastry_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pastry delete DELETE ' + req.params.id); 
}; 
 
// Handle Pastry update form on PUT. 
exports.pastry_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pastry update PUT' + req.params.id); 
};