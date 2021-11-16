const mongoose = require("mongoose");
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