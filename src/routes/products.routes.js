const express = require('espress')
const productController = require('../controllers/products.controller')

const router = express.Router()

router.get('/', productController.serialize)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router