const product = require('./product')

const createProduct = async function({name, price, barcode}){
    product.create({
        name:name, 
        price:price,
        barcode:barcode
    }, (err, doc)=>{
        if (err){
            return err
        }else{
            return 'ok'
        }
    })
}

module.exports = createProduct