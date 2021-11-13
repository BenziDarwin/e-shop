const mongoose = require("mongoose");
const Items = require("./Items");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category:{
        type:String,
        required:true,
    },
    group:{
        type:String,
        required:true,
    }
});


module.exports = Category = mongoose.model("Category",CategorySchema)