const employees = require("../model/agroEmployeeModel");

let postingEmployeeDetails = async (req, res) => {
    let theuserCredentials = req.body;
    try {
        const existingEmployee = await employees.findOne({ email: theuserCredentials.email });

        if (existingEmployee) {
          res.status(200).send({
            status: "failed",
            message: "User with this email already exists",
            data: existingEmployee,
          })
        } else {
            const savedEmployee = await employees.insertMany(theuserCredentials);
            res.status(200).send({
                    status: "success",
                    message: "user registered sucessfully",
                    data: savedEmployee,
                });
        }
    } catch (error) {
        res.status(500).json({ message: "unable save user into database" });
    }
};


//validating And givingauthentication to user

let ValidationEmployee = async (req,res)=>{
   let loginDetails = req.body;
   try {
    let userExist = await employees.findOne({email:loginDetails.email});
    console.log(userExist)

    if(userExist){
        console.log(userExist.password);
        console.log(loginDetails.password)
        if(userExist.password===loginDetails.password){
            res.status(200).send({
                status: "sucess",
                message: "Logged In Sucessfully",
                data: userExist,
              }) 
        }else{
            res.status(200).json({status:'wrong',message:'Entered a wrong Password'})
        }
       
    }else if(!userExist){
        res.status(200).json({status:'failed',message:'No user with this email id'})
    }
    
   } catch (error) {
        res.status(500).json({status:'error',message:'error occured'})
   }
}


module.exports = {postingEmployeeDetails,ValidationEmployee}


// module.exports = ValidationEmployee