'use strict'

const express = require('express')
const router  = express.Router()
const controller = require('../controller/taskController')

router.get('/', controller.getTask)
router.get('/:id', controller.findTask)
router.post('/', controller.createTask)
router.delete('/:id', controller.deleteTask)
router.put('/:id', controller.editTask)
router.put('/tag/:id', controller.addTag)

module.exports = router;
