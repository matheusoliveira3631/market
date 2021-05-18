const product = require('./product')

const deleteProduct = async function(param, value){
    const query={}
    query[param]=value
    product.deleteOne(query, (err)=>{
        if (err){
            return err
        }else{
            return 'ok'
        }
    })

}

const updateProduct = function(param, values){
    const query={}
    query[param]=values['old']
    product.updateOne(query, values['new'], (err, ret)=>{
        if (err){
            return err
        }else{
            return 'ok'
        }
    })
}

module.exports = {deleteProduct, updateProduct}
