const checkPassword = require('../utils/passwords').checkPassword
const findEmployeeBy = require('../database/employee/findEmployee').findEmployeeBy


module.exports = class loginMiddleware{
    async login(req, res, next){
        const employeeId = req.body['employee_id']
        const plainTextPassword = req.body['password'].toString()
        findEmployeeBy('employee_id', employeeId).then((docs)=>{
            const hashedPassword = docs[0].password.toString()
            checkPassword(plainTextPassword, hashedPassword, (bool)=>{
                bool ? next() : res.status(401).json({message:'Incorrect password'})
            })
        })
    }

    async adminCheck(req, res, next){
        const employeeId = req.body['employee_id']
        const plainTextPassword = req.body['password'].toString()
        findEmployeeBy('employee_id', employeeId).then((docs)=>{
            const hashedPassword = docs[0].password.toString()
            checkPassword(plainTextPassword, hashedPassword, (bool)=>{
                bool ? docs[0].admin ? next() : res.status(403).json({message:'No admin privileges'}) : res.status(401).json({message:'Incorrect password'})
            })
        })
    }
}