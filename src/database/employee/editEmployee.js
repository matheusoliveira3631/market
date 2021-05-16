const employee = require('./employee')

const deleteEmployee = async function(param, value){
    const query={}
    query[param]=value
    employee.deleteOne(query, (err)=>{
        if (err){
            return err
        }else{
            return 'ok'
        }
    })

}

const updateEmployee = function(param, values){
    const query={}
    query[param]=values['old']
    employee.updateOne(query, values['new'], (err, ret)=>{
        if (err){
            return err
        }else{
            return 'ok'
        }
    })
}
