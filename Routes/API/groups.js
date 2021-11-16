const express = require("express");
const router = express.Router();
const Groups = require("../../Models/Groups")

router.get('/',(req,res) => {
    Groups.find()
    .then(groups => res.json(groups))
})

router.post('/newgroup', (req,res) => {
    const group = new Groups(req.body)
    group.save()
    .then(() => res.json("Group added successfully"))
})


module.exports = router