const {findEmployeeBy, serializeEmployee} = require('../database/employee/findEmployee')
const hashPassword = require('../utils/passwords').hashPassword

module.exports = class employeeMiddleware {
    async bodyValidation(req, res, next){
        const body = req.body
        const emptyFields = []
        body.name ? {} : emptyFields.push('Name')
        body.surname ? {} : emptyFields.push('Surname')
        body.employee_id ? {} : emptyFields.push('employee_id')
        body.gender ? {} : emptyFields.push('Gender')
        body.office ? {} : emptyFields.push('Office')
        body.wage ? {} : emptyFields.push('Wage')
        body.password ? {} : emptyFields.push('Password')
        emptyFields.length!=0 ? res.status(500).json({message:`Required fields: ${emptyFields}`}) : next()
    }

    async idValidation(req, res, next){
        let id = null
        req.params.id ?  id = req.params.id : id = req.body['employee_id']
        const result = await findEmployeeBy('employee_id', id)
        result.length !=0 ? next() : res.status(500).json({message:"No employee found for given ID"})
    }

    async passwordValidation(req, res, next){
        let plainTextPassword = req.body['password'].toString()
        hashPassword(plainTextPassword, (hash)=>{
            req.body['password']=hash
            next()
        }).catch((err)=>{
            res.status(500).json({message:err})
        })
    }
}