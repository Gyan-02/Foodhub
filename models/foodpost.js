const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({
    url:String,
    filename:String
})

const FoodpostSchema =new mongoose.Schema({
    title: String,
    Images:[ImageSchema],
    price:Number,
    description:String,
    location:String
});
module.exports =mongoose.model("Foodpost",FoodpostSchema);