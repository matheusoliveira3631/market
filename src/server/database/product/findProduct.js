const product = require('./product')

const findProductBy = async function(param, value){
    const response=[]
    const query={}
    query[param]=value
    for await (const doc of product.find(query)){
        response.push(doc)
    }
    return response
}

const serializeProducts = async function(){
    const response=[]
    for await (const doc of product.find({})){
        response.push(doc)
    }
    return response
}

module.exports = {findProductBy, serializeProducts}