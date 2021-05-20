const createEmployee = require('../database/employee/createEmployee')
const {deleteEmployee, updateEmployee} = require('../database/employee/editEmployee')
const {findEmployeeBy, serializeEmployee} = require('../database/employee/findEmployee')

module.exports = class employeeController {
    async serialize(req, res){
        try{
            serializeEmployee().then((employeeList)=>{
                res.status(200).json(employeeList)
            })
        } catch(err){
            res.status(500).json({message:err})
        }
    }

    async createEmployee(req, res){
        try{
            await createEmployee(req.body)
            res.status(201).json({message:'ok'})
        } catch(err){
            res.status(500).json({message:err})
        }
    }

    async updateEmployee(req, res){
        try{
            await updateEmployee('employee_id', {'old':req.params.id, 'new':req.body})
            res.status(200).json({message:'ok'})
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    async deleteEmployee(req, res){
        try{
            await deleteEmployee('employee_id', req.params.id)
            res.status(200).json({message:'ok'})
        }catch(err){
            res.status(500).json({message:err})
        }
    }
}