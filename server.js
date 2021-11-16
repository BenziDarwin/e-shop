const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Routes for API
const items = require("./Routes/API/items");
const categories = require("./Routes/API/category")
const groups = require("./Routes/API/groups")

//Middleware
app.use(express.json());
app.use(cors());

// Database config
const db = require("./Config/keys").mongoURL;

mongoose.connect(db)
.then(() => console.log("Database Connected..."))
.catch((err) => {
    console.log(err)
    process.exit(0)
});


//Use routes
app.use('/items',items);
app.use('/categories',categories)
app.use("/groups",groups)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`))

