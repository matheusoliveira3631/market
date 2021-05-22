const employee = require('./employee')

const createEmployee = async function({name, surname, employee_id, gender, office, wage, password, admin}){
    try{
    employee.create({
        name:name,
        surname:surname,
        employee_id:employee_id,
        gender:gender,
        office:office,
        wage:wage,
        password:password,
        admin:admin
    })
    return 'ok'
    }catch(err){
        return err
    }
}  

module.exports = createEmployee
