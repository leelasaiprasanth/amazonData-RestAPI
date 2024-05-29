const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express()

// Middle ware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Product route
app.use("/api/products", productRoute)

// Greeting
app.get('/', (req, res) => {
    res.send('Hello from NODE-API...!')
});


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server running on port 3000')
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
