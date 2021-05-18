const product = require('./product')

const deleteProduct = async function(param, value){
    const query={}
    query[param]=value
    try{
        product.deleteOne(query)
        return 'ok'
    }catch(err){
        return err
    }
}

const updateProduct = async function(param, values){
    const query={}
    query[param]=values['old']
    try{
        product.updateOne(query, values['new'])
        return 'ok'
    }catch(err){
        return err
    }   
}

module.exports = {deleteProduct, updateProduct}
