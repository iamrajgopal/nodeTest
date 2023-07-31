
const mongoose = require('mongoose');
let collection = 'Agro';

const agroEmployeesSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    phone: Number,
    email: String,
    password: String
});

const employees = mongoose.model(collection, agroEmployeesSchema);

module.exports = employees;
