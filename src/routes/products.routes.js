const express = require('express')
const Controller = require('../controllers/products.controller')
const Middleware = require('../middleware/productMiddleware')
const productController = new Controller
const productMiddleware = new Middleware

const router = express.Router()

router.get('/', productController.serialize)

router.post('/', productMiddleware.bodyValidation, productController.createProduct)

router.put('/:id',productMiddleware.idValidation ,productMiddleware.bodyValidation ,productController.updateProduct)

router.delete('/:id', productMiddleware.idValidation ,productController.deleteProduct)

module.exports = router