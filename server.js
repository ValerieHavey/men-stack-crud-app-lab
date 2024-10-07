const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

const Car = require('./models/car');

//app.arguments(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/cars/new', (req, res) => {
    res.render('cars/new.ejs');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});