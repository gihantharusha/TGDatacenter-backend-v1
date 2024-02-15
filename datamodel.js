const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DataModel = new Schema({
    title:String,
    data:String
})

const Data = mongoose.model("Data", DataModel)

module.exports = Data;