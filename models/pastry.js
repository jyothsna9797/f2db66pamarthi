//const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")
const pastrySchema = mongoose.Schema({
    pastry_flavour: {
        type: String,
        minLength: 4,
        maxLength: 12
    },
    calories: Number,
    pastry_shape: {
        type: String,
        minLength: 3,
        maxLength: 13
    }
})

module.exports = mongoose.model("Pastry", pastrySchema) 