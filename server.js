const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());

// Database config
const db = require("./Config/keys").mongoURL;

mongoose.connect(db)
.then(() => console.log("Database Connected..."))
.catch((err) => {
    console.log(err)
    process.exit(0)
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`))

