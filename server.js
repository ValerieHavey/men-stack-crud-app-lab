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

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/cars/new', (req, res) => {
    res.render('cars/new.ejs');
});

app.post('/cars', async (req, res) => {
    console.log(req.body);
    await Car.create(req.body);
    res.redirect('/');
});

app.get('/cars', async (req, res) => {
    const list = await Car.find({});
    res.render('cars/list.ejs', {
        list:list
    });
})

app.get('/cars/:id', async (req, res) => {
    const id = req.params.id
    const car = await Car.findById(id);
    res.render('cars/view.ejs', {
        car:car
    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});