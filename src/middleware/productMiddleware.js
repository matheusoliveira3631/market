const {findProductBy, serializeProducts} = require('../database/product/findProduct')

module.exports = class productsMiddleware{
    async bodyValidation(req, res, next){
        const body = req.body
        body.name ? {} : res.status(500).json({message:'Name required'})
        body.price ? {} : res.status(500).json({message:'Price required'})
        body.barcode ? {} : res.status(500).json({message:'Barcode required'})
    }

    async idValidation(req, res, next){
        const result = await findProductBy('barcode', req.params.id)
        result.length!=0 ? next() : res.status(500).json({message:'No product match for given ID'})
        
    }
}