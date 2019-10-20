const express = require('express')
const router = new express.Router()
const {first} = require('./handler')

router.use(first)

router.use('/v1/auth', require('../auth').router)

router.use('/v1/products', require('../products').router)
router.use('/v1/users', require('../user').router)
router.use('/v1/categories', require('../category').router)

router.use('/v1/brands', require('../brand').router)
router.use('/v1/orders', require('../order').router)
router.use('/v1/carts', require('../cart').router)
router.use('/v1/tags', require('../tag').router)
router.use('/v1/campaigns', require('../campaign').router)
router.use('/v1/coupons', require('../coupon').router)
router.use('/v1/uploads', require('../upload').router)
module.exports = router