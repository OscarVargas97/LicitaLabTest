const express = require('express')
const router = express.Router()

// Here add all routes

router.use('/user', require('./user'))

router.use('/', require('./errors'))

module.exports = router
