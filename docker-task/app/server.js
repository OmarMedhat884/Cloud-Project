const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(morgan("dev"));

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
}));

mongoose.connect("mongodb://mongo:27017/testdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/", authRoutes);

app.use("/", itemRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});