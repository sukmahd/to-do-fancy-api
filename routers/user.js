'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')
const middleware = require('../helpers/authHelper')

router.post('/signin', controller.signin)
router.post('/signup', controller.signup)
router.put('/:id', middleware.auth, controller.addTask)
router.get('/:id', middleware.auth, controller.showTask)
router.post('/:id',middleware.auth, controller.addTag)
router.delete('/:id/:idT',middleware.auth, controller.removeTask)
router.put('/tag/:id', controller.removeTag)


module.exports = router;
