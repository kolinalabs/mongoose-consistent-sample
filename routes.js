const router = require('express').Router()
const {
    category,
    product,
    order,
    transaction,
    promotion,
} = require('./controllers')

// categories
router.get('/categories', category.index)
router.post('/categories', category.create)
router.delete('/categories/:id', category.delete)

// products
router.get('/products', product.index)
router.post('/products', product.create)
router.delete('/products/:id', product.delete)

// orders
router.get('/orders', order.index)
router.post('/orders', order.create)
router.delete('/orders/:id', order.delete)

// transactions
router.get('/transactions', transaction.index)
router.post('/transactions', transaction.create)

// promotions
router.get('/promotions', promotion.index)
router.post('/promotions', promotion.create)

module.exports = router
