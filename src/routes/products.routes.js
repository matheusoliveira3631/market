const express = require('express')
const Controller = require('../controllers/products.controller')
const productController = new Controller

const router = express.Router()

router.get('/', productController.serialize)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router