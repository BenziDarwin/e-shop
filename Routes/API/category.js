const express = require("express");
const router = express.Router();

//Category module
const   Category = require("../../Models/Category")

//Routes

//Get requests
router.get("/", (req,res) => {
    Category.find()
    .then(categories => res.json(categories))
});


//Post requests
router.post("/newcategory",(req,res) => {
    const category = new Category(req.body)
    category.save()
    .then(category => res.json(category))
});
//Delete requests

module.exports = router