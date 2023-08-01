
const mongoose = require('mongoose');
let collection = 'agros';

const agroEmployeesSchema =  mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    phone: Number,
    email: String,
    password: String
});

const employees = new mongoose.model(collection, agroEmployeesSchema);

module.exports = employees;
