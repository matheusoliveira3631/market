const product = require('./product')

const createProduct = async function({name, price, barcode}){
    try{
        product.create({
            name:name, 
            price:price,
            barcode:barcode
        })
        return 'ok'
    }catch(err){
        return err
    }
}

module.exports = createProduct