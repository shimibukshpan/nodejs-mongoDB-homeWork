const mongoose = require("mongoose");

const pets = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    favFood:String,
    age:{
        type:Number,
        min:1,
        max:99
    }
});

module.exports = mongoose.model("myPets", pets);