const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./config/Db');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;

//Database Connection
connectToDB(url).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
})

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

//Global Error Hanler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
