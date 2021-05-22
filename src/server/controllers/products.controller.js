const createProduct = require('../database/product/createProduct')
const {deleteProduct, updateProduct} = require('../database/product/editProduct')
const {findProductBy, serializeProducts} = require('../database/product/findProduct')

module.exports = class productController {
    async serialize(req, res){
        serializeProducts().then((productList)=>{
            res.status(200).json(productList)
        }).catch((err)=>{
            res.status(500).json({message:err})
        })
        
    }

    async createProduct(req, res){
        try{
        await createProduct(req.body)
        res.status(201).json({message:'ok'})
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    async updateProduct(req, res){
        try{
        await updateProduct('barcode', {old:req.params.id, new:req.body})
        res.status(200).json({message:'ok'})
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    async deleteProduct(req, res){
        try{
        await deleteProduct('barcode', req.params.id)
        res.status(200).json({message:'ok'})
        }catch(err){
            res.status(500).json({message:err})
        }
}
}