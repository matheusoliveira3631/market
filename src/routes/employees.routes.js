const express = require('express')
const employeeController = require('../controllers/employees.controller')

const router = express.Router()

router.get('/', employeeController.serialize)

router.post('/', employeeController.createEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)

module.exports = router