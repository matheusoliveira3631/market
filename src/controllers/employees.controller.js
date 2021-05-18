const createEmployee = require('../database/employee/createEmployee')
const {deleteEmployee, updateEmployee} = require('../database/employee/editEmployee')
const {findEmployeeBy, serializeEmployee} = require('../database/employee/findEmployee')

module.exports = class employeeController {
    serialize(req, res){
        try{
            serializeEmployee().then((employeeList)=>{
                res.status(200).json(employeeList)
            })
        } catch(err){
            res.status(500).json({message:err})
        }
    }

    createEmployee(req, res){
        try{
            createEmployee(req.body).then((msg)=>{
                if (msg!='ok'){
                    res.status(500).json({message:msg})
                }else{
                    res.status(201)
                }
            })
        } catch(err){
            res.status(500).json({message:err})
        }
    }

    updateEmployee(req, res){
        try{
            updateEmployee('employee_id', {'old':req.params.id, 'new':req.body}).then((msg)=>{
                if (msg!='ok'){
                    res.status(500).json({message:msg})
                }else{
                    res.status(200)
                }
            })
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    deleteEmployee(req, res){
        try{
            deleteEmployee('employee_id', req.params.id).then((msg)=>{
                if (msg!='ok'){
                    res.status(500).json({message:msg})
                }else{
                    res.status(200)
                }
            })
        }catch(err){
            res.status(500).json({message:err})
        }
    }
}