const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const Port = 3197;
let db = 'Bailley';
let collection = 'Agro';

const url = `mongodb+srv://iamrajgopal:iamrajgopal@cluster0.qctpxd2.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('database Connected')).catch((error) => console.log('error occured in database :', error))

const app = express();
app.use(cors());


// app.post('/postingEmployeeDetails', async (req, res) => {
   
// })

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(Port, () => {
    console.log(`Listening To Port :${Port}`)
})