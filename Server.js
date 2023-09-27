const express = require('express')
const dbConnect = require('./Database/DB Connection');
const loginRoute = require('./Routes/loginRoute')
const signUpRoute = require('./Routes/signUpRoute')
const getUserRoute = require('./Routes/getUserRoute')
const cors = require('cors');
const app = express()
require('dotenv').config();
const port = process.env.port || 4000 ;
app.use(express.json())
app.use(express.urlencoded({
  extended: true}));
app.use(cors())



dbConnect();
app.use("/",loginRoute)
app.use("/",signUpRoute)
app.use("/",getUserRoute)

app.listen(port, () => {
  console.log(`My Server is running on port ${port}`)
})