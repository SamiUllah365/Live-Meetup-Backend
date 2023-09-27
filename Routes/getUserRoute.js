const express = require('express');
const getUser = require('../Controller/User_Controller');
const router = express.Router();

router.get('/user',getUser)

module.exports = router;