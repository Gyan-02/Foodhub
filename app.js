const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

async function mongo_connect() {
    try {
        await mongoose.connect("mongodb+srv://user1:pass1@cluster1.ddwffa4.mongodb.net/gg_foodhub");
        console.log("Database connected");
    } catch (err) {
        console.log("Connection error:", err);
    }
}

mongo_connect();

const app = express();
app.use('/uploads', express.static('uploads'))
app.use(express.static("public"));
app.use("/foodposts", router);

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Fixed __dirname

app.get("/", (req, res) => {
    res.sendFile("home.html",{root: __dirname});
});

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(statusCode).send(err.message); // Fixed send usage
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));
