const mongoose = require('mongoose')

const User_Schema = new mongoose.Schema({
    "First_Name":String,
    "Last_Name":String,
    "User_Email":String,
    "Password":String
  })
  
  const User_Model = mongoose.model('login' , User_Schema)

  module.exports = User_Model;