import express from 'express'
import { ProductController } from './mvc/controllers/product.controller'
import { CouponController } from './mvc/controllers/coupon.controller'

const app = express()

const productController = new ProductController();
app.post('/products/buy', productController.buyProduct) // 상품 구매하기
app.post('/products/refund', productController.refundProduct) // 상품 환불하기

const couponController = new CouponController();
app.post('/coupons/buy', couponController.buyCoupon) // 쿠폰 구매하기

app.listen(3000)