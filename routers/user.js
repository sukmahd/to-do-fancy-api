'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')

router.post('/signin', controller.signin)
router.post('/signup', controller.signup)
router.post('/:id', controller.addTask)
router.get('/:id', controller.showTask)


module.exports = router;
