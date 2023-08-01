const express = require('express');
const route = express.Router();
const  postingEmployeeDetails = require('../controller/employeeController') ;

route.post('/postingEmployeeDetails',postingEmployeeDetails);

module.exports = route

