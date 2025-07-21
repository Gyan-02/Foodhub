const mongoose = require('mongoose');
const Foodpost = require('./models/foodpost.js');

async function connect(){
await mongoose.connect('mongodb+srv://user1:pass1@cluster1.ddwffa4.mongodb.net/gg_foodhub');

const coll =
[
  {
    title: "Budget Thali Meal",
    price: 50,
    description: "A complete thali with roti, rice, dal, sabzi, and pickle.",
    location: "Ghatkopar, Mumbai, Maharashtra"
  },
  {
    title: "Spicy South Indian Combo",
    price: 70,
    description: "Idli, dosa, vada, and sambhar served with chutneys.",
    location: "T. Nagar, Chennai, Tamil Nadu"
  },
  {
    title: "Punjabi Tandoori Plate",
    price: 120,
    description: "Tandoori roti, butter paneer, dal makhani, and salad.",
    location: "Amritsar, Punjab"
  },
  {
    title: "Student Combo Meal",
    price: 40,
    description: "Veg pulao with curd and papad, ideal for students.",
    location: "Kothrud, Pune, Maharashtra"
  },
  {
    title: "Healthy Millet Lunch",
    price: 60,
    description: "Bajra roti, palak dal, and seasonal sabzi combo.",
    location: "Banjara Hills, Hyderabad, Telangana"
  },
  {
    title: "North Indian Express Plate",
    price: 90,
    description: "2 parathas, chole, rice, and sweet dish.",
    location: "Hazratganj, Lucknow, Uttar Pradesh"
  },
  {
    title: "Office Lunch Box",
    price: 75,
    description: "Packed meal with roti, sabzi, dal, rice, and salad.",
    location: "Koramangala, Bengaluru, Karnataka"
  },
  {
    title: "Evening Tiffin Service",
    price: 65,
    description: "Evening meal delivery with chapati, sabzi, and snack.",
    location: "Bapu Nagar, Jaipur, Rajasthan"
  },
  {
    title: "Gujarati Meal Pack",
    price: 85,
    description: "Roti, dal, kadhi, rice, and two sabzis with pickle.",
    location: "Maninagar, Ahmedabad, Gujarat"
  },
  {
    title: "Biryani Special Lunch",
    price: 110,
    description: "Hyderabadi chicken biryani with raita and salad.",
    location: "Charminar, Hyderabad, Telangana"
  }
]

Foodpost.insertMany(coll);
 
console.log("Done");
}

connect();