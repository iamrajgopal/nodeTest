const express = require('express');
const routers = express.Router();
const  employeeController = require('../controller/employeeController') ;

routers.post('/postingEmployeeDetails',employeeController.postingEmployeeDetails);

