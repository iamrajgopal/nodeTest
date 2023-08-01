const express = require('express');
const cors = require('cors');
const route = require('./routes/agroEmployeeRoute');
const connection = require('./dataBase/db')

const Port = process.env.Port || 5000


const app = express();
app.use(cors());

app.use('/employee',route)
// app.post('/postingEmployeeDetails', async (req, res) => {
   
// })

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(Port, () => {
    console.log(`Listening To Port :${Port}`)
})