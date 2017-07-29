'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')

router.post('/signin', controller.signin)
router.post('/signup', controller.signup)
router.put('/:id', controller.addTask)
router.get('/:id', controller.showTask)
router.delete('/:id/:idT', controller.removeTask)


module.exports = router;
