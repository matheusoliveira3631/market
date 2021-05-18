const express = require('express')
const Controller = require('../controllers/employees.controller')
const employeeController = new Controller

const router = express.Router()

router.get('/', employeeController.serialize)

router.post('/', employeeController.createEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)

module.exports = router