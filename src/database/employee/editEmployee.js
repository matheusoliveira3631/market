const employee = require('./employee')

const deleteEmployee = async function(param, value){
    const query={}
    query[param]=value
    try{
    employee.deleteOne(query)
    }catch(err){
        return err
    }
}

const updateEmployee = async function(param, values){
    const query={}
    query[param]=values['old']
    try{
    employee.updateOne(query, values['new'])
    }catch(err){
        return err
    }
}


module.exports = {deleteEmployee, updateEmployee}