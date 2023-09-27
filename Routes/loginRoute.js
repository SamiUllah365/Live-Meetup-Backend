const getUser = require('../Controller/Login_Controller')
const express = require('express')
const router = express.Router();


router.post("/login", getUser)

module.exports = router