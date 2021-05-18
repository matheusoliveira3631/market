const employee = require('./employee')

const createEmployee = async function({name, surname, id, gender, office, wage, password}){
    try{
    employee.create({
        name:name,
        surname:surname,
        employee_id:id,
        gender:gender,
        office:office,
        wage:wage,
        password:password
    })
    }catch(err){
        return err
    }
}  

module.exports = createEmployee
