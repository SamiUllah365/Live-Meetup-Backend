const createUser = require('../Controller/SignUp_Controller')
const express = require('express')
const router = express.Router();


router.post("/register", createUser)

module.exports = router