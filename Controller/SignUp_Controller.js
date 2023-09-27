const User_Model = require('../Model/User_Model')

  let createUser = async(req, res) => {
    try {
        const user_req = req.body;
        console.log(user_req)
        const Email = user_req.User_Email;
        const existUser = await User_Model.findOne({User_Email:Email})
        if(existUser){
          res.status(200).json({statusCode:200, data:"This Email already registered"})
        }
        else{
           const user_detail = new User_Model(user_req)
           await user_detail.save();
           res.status(200).json({statusCode: 200, data: "User Register Successfully"})
        }        
        // console.log(doc)
      } catch (error) {
        res.status(400).json({statusCode: 400, Error_Message: error.toString()})
      }
  }

  module.exports = createUser