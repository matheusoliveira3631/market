const product = require('./product')

const deleteProduct = async function(param, value){
    const query={}
    query[param]=value
    try{
        product.deleteOne(query, (err)=>{
            if (err){
                throw err
            }else{
                return 'ok'
            }
        })
    }catch(err){
        throw err
    }
}

const updateProduct = async function(param, values){
    const query={}
    query[param]=values['old']
    console.log(values['new'])
    try{
        product.updateOne(query, values['new'], (err)=>{
            if (err){
                throw err
            }else{
                return 'ok'
            }
        })
    }catch(err){
        throw err
    }   
}

module.exports = {deleteProduct, updateProduct}
