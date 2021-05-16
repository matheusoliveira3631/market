const employee = require('./employee.js')

const findEmployeeBy = async function(param, value){
    const response=[]
    const query={}
    query[param]=value
    for await (const doc of employee.find(query)){
        response.push(doc)
    }
    return response
}

const serializeEmployees = function(){
    const response=[]
    for await (const doc of employee.find({})){
        response.push(doc)
    }
    return response
}

module.exports = {findEmployeeBy, serializeEmployees}