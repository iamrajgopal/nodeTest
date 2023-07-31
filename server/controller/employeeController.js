const employees = require('../model/agroEmployeeModel');

let postingEmployeeDetails = async (req,res)=>{
    try {
        const savedEmployee = await employees.insertMany({name: 'nanda',gender: 'Male',age: '28',phone: 9398420,email: 'iamraj1@gmail.com',password: '12S01a0jdhf@'});

        console.log(savedEmployee);

        res.status(200).send({ status: 'success', message: 'user registered sucessfully', data: savedEmployee })

    } catch (error) {
        res.status(500).json({ message: 'unable save user into database' })
    }

}

module.exports = {postingEmployeeDetails} ;