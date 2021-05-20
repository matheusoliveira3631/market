const express = require('express')
const Controller = require('../controllers/employees.controller')
const Middleware = require('../middleware/employeeMiddleware')
const employeeController = new Controller
const employeeMiddleware = new Middleware

const router = express.Router()

router.get('/', employeeController.serialize)

router.post('/', employeeMiddleware.bodyValidation, employeeController.createEmployee)

router.put('/:id', employeeMiddleware.idValidation, employeeMiddleware.bodyValidation ,employeeController.updateEmployee)

router.delete('/:id', employeeMiddleware.idValidation ,employeeController.deleteEmployee)

module.exports = router