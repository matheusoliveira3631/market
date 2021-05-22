const express = require('express')
const Middleware  = require('../middleware/loginMiddleware')
const Middleware1 = require('../middleware/employeeMiddleware')
const loginMiddleware = new Middleware
const employeeMiddleware = new Middleware1


const router = express.Router()

router.post('/',employeeMiddleware.idValidation,loginMiddleware.login, (req, res)=>{
    res.status(200).json({message:'ok'})
} )

router.post('/admin', employeeMiddleware.idValidation, loginMiddleware.login, loginMiddleware.adminCheck, (req, res)=>{
    res.status(200).json({message:'ok'})
})

module.exports = router