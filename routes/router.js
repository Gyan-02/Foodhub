const express = require("express");
const router = express.Router();
const path = require("path");
const Foodpost = require("../models/foodpost"); // ✅ model
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
// Show all foodposts
router.get("/", async (req, res) => {
    const foodposts = await Foodpost.find({});
    res.render("index", { foodposts });
});

// Form to create new foodpost
router.get("/new", (req, res) => {
    res.render("new");
});

// Create new foodpost (with images)
router.post("/", upload.array("image"), async (req, res) => {
    const foodpost = new Foodpost(req.body); // ✅ new document
    foodpost.Images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await foodpost.save();
    console.log("Foodpost Created");
    res.redirect(`/foodposts/${foodpost._id}`); // ✅ template string was fixed
});

// Show individual foodpost
router.get("/:id", async (req, res) => {
    const foodpost = await Foodpost.findById(req.params.id);
    if (!foodpost) {
        return res.status(404).send("Foodpost not found");
    }
    res.render("show", { foodpost });
});

module.exports = router;
