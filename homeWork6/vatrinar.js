const mongoose = require("mongoose");
const vatrinar = new mongoose.Schema({
    firstName:String,
    lastName:String,
    phone:Number
});

module.exports = mongoose.model("vatrinar", vatrinar);