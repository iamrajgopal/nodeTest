const express = require('express');
const route = express.Router();
const  {postingEmployeeDetails,ValidationEmployee} = require('../controller/employeeController') ;


route.post('/postingEmployeeDetails',postingEmployeeDetails);
route.post('/validEmployees',ValidationEmployee);

module.exports = route

