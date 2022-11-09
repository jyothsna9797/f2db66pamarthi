const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")
const pastrySchema = mongoose.Schema({
    pastry_flavour: String, 
    calories: Number, 
    pastry_shape: String
})

module.exports = mongoose.model("Pastry", pastrySchema) 