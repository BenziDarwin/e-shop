const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    }

});

module.exports = Items = mongoose.model("Items",ItemSchema)