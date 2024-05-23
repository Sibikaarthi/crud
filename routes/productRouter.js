// import controllers review, products
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)

// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)











// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)

module.exports = router


