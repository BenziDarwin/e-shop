const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group: {
        type:String,
        required:true,
    }
})

module.exports = Groups = mongoose.model("Group",groupSchema)