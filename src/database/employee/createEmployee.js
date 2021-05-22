const employee = require('./employee')

const createEmployee = async function({name, surname, employee_id, gender, office, wage, password}){
    try{
    employee.create({
        name:name,
        surname:surname,
        employee_id:employee_id,
        gender:gender,
        office:office,
        wage:wage,
        password:password
    })
    return 'ok'
    }catch(err){
        return err
    }
}  

module.exports = createEmployee
