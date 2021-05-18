const createProduct = require('../database/product/createProduct')
const {deleteProduct, updateProduct} = require('../database/product/editProduct')
const {findProductBy, serializeProducts} = require('../database/product/findProduct')

module.exports = class productController {
    serialize(req, res){
        try{
            serializeProducts().then((productList)=>{
                res.status(200).json(productList)
            })
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    createProduct(req, res){
        try{
            createProduct(req.body).then((message)=>{
                if (message!='ok'){
                    res.status(500).json({message:message})
                }else{
                    res.status(201).json({message:'ok'})
                }
            })
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    updateProduct(req, res){
        try{
            updateProduct('barcode', {old:req.params.id, new:req.body}).then((message)=>{
                if (message!='ok'){
                    res.status(500).json({message:message})
                }else{
                    res.status(200).json({message:'ok'})
                }
            })
        }catch(err){
            res.status(500).json({message:err})
        }
    }

    deleteProduct(req, res){
        try{
            deleteProduct('barcode', req.params.id).then((message)=>{
                if (message!='ok'){
                    res.status(500).json({message:message})
                }else{
                    res.status(200).json({message:'ok'})
                }
            })
        }catch(err){
            res.status(500).json({message:message})
        }
    }
}