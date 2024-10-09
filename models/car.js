const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    typeOfVehicle: {type: String, required: true },

});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;