var Pastry = require('../models/pastry');

// List of all Pastry 
exports.pastry_list = async function (req, res) {
    try {
        thePastries = await Pastry.find();
        res.send(thePastries);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.pastry_view_all_Page = async function (req, res) {
    try {
        thePastries = await Pastry.find();
        res.render('pastry', { title: 'Pastry Search Results', results: thePastries });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Pastry. 
exports.pastry_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Pastry.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Pastry create on POST. 
exports.pastry_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Pastry();

    document.pastry_flavour = req.body.pastry_flavour;
    document.calories = req.body.calories;
    document.pastry_shape = req.body.pastry_shape;

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.pastry_view_one_Page = async function(req, res) {
    console.log("Jyothsna")
    console.log("single view for id " + req.query.id)
    try{
    result = await Pastry.findById( req.query.id)
    res.render('pastrydetail', { title: 'Pastry Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
} 

// Handle Pastry delete form on DELETE. 
exports.pastry_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Pastry.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Pastry update form on PUT. 
exports.pastry_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Pastry.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.pastry_flavour)  
               toUpdate.pastry_flavour = req.body.pastry_flavour; 
        if(req.body.calories) toUpdate.calories = req.body.calories; 
        if(req.body.pastry_shape) toUpdate.pastry_shape = req.body.pastry_shape; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pastry_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('pastrycreate', { title: 'Pastry Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 