const express = require('express')
var router = express()
const login = require('../controller/login')
const bodyparser = require('body-parser');

router.use(bodyparser.json())  
router.post('/',login.login)

module.exports= router