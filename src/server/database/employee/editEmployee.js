const employee = require('./employee')

const deleteEmployee = async function(param, value){
    const query={}
    query[param]=value
    try{
        employee.deleteOne(query, (err)=>{
            if (err){
                throw err
            }else{
                return 'ok'
            }
        })
    }catch(err){
        return err
    }
}

const updateEmployee = async function(param, values){
    const query={}
    query[param]=values['old']
    try{
    employee.updateOne(query, values['new'], (err)=>{
        if (err){
            throw err
        }else{
            return 'ok'
        }
    })
    }catch(err){
        return err
    }
}


module.exports = {deleteEmployee, updateEmployee}