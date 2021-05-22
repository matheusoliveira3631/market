const {findProductBy, serializeProducts} = require('../database/product/findProduct')

module.exports = class productMiddleware{
    async bodyValidation(req, res, next){
        const body = req.body
        const emptyFields=[]
        body.name ? {} : emptyFields.push('Name')
        body.price ? {} : emptyFields.push('Price')
        body.barcode ? {} : emptyFields.push('Barcode')
        emptyFields.length!=0 ? res.status(500).json({message:`Required fields: ${emptyFields}`}) : next()
    }

    async idValidation(req, res, next){
        const result = await findProductBy('barcode', req.params.id)
        result.length!=0 ? next() : res.status(500).json({message:'No product match for given ID'})
        
    }
}