const mongoose = require("mongoose");

const oners = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:String,
    email:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number,
        min:1,
        max:99
    },
    vatrinarId: [mongoose.SchemaTypes.ObjectId],
    petsArr:[mongoose.SchemaTypes.ObjectId]
});
module.exports = mongoose.model("oners", oners);