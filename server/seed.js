const connectToDB = require("./config/Db");
const Product = require("./models/Product");
require("dotenv").config();

const url = process.env.MONGODB_URL;

const seedProducts = [
  {
    name: "Wireless Headphones",
    price: 2499
  },
  {
    name: "Mechanical Keyboard",
    price: 3499
  },
  {
    name: "Gaming Mouse",
    price: 1499
  },
  {
    name: "27-inch Monitor",
    price: 12999
  },
  {
    name: "USB-C Charger",
    price: 999
  },
  {
    name: "Bluetooth Speaker",
    price: 1999
  },
];

const seedData = async () => {
  try {
    await connectToDB(url);
    await Product.deleteMany(); // clear old data
    await Product.insertMany(seedProducts);
    console.log("Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();