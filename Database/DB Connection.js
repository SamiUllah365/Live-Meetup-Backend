const mongoose = require('mongoose')
require('dotenv').config();

const ConnectionString = process.env.connection ;

const dbConnect = async() => {
    mongoose.connect(ConnectionString)
    .then(()=>{
        console.log("Database Connection established Successfully")
    }).catch((error)=>{
        console.log(`Error DB connectivity : ${error}`)
    })
}

module.exports = dbConnect;