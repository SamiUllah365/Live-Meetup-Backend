const express = require('express');
const getUser = require('../Controller/Login_Controller');
const router = express.Router();

router.get('/user/:id',getUser)

module.exports = router;