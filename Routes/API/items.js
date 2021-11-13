const express = require("express");
const router = express.Router();

const Items = require("../../Models/Items")


//Get requests
router.get("/", (req,res) => {
    Items.find()
    .then(items => res.json(items))
});


//Post Requests
router.post("/newitem", (req,res) => {
    const item = new Items(req.body)
    item.save()
    .then(item => res.json(item))

//Delete Requests
router.delete("/:id",(req,res) => {
    Items.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json("Successfully removed")))
})

});
module.exports = router