const User_Model = require('../Model/User_Model')

  let getUser = async(req, res) => {
    try {
      const {User_Email, Password} = req.body;
      console.log(`User_Email :${User_Email} , Password :${Password}`)
      const response = await User_Model.findOne({User_Email:User_Email, Password:Password})
      if(response.User_Email === User_Email && response.Password === Password){
        res.status(200).json({statusCode: 200, data: "Login Successfully"})
      }
      // else if(response.User_Email !== User_Email || response.Password !== Password){
      //   res.status(200).json({statusCode: 200, data: "User Email or Password incorrect"})
      // }
    } catch (error) {
      res.status(400).json({statusCode: 400, data: error.toString()})
    }
  }

  module.exports = getUser