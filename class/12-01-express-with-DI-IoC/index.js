import express from 'express'
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { CashService } from './mvc/controllers/services/cash.service.js'
import { ProductService } from './mvc/controllers/services/product.service.js'
import { PointService } from './mvc/controllers/services/point.service.js'

const app = express()

const productService = new ProductService()
const cashService = new CashService() // new 한 번으로 모든 곳에서 재사용 가능.(싱글톤 패턴 : 하나를 가지고 나눠 쓰고 있다.)
const pointService = new PointService() // 쿠폰 구매 방식이 포인트 결제로 변경됨

// 상품 API
const productController = new ProductController(cashService, productService);
app.post('/products/buy', productController.buyProduct) // 상품 구매하기
app.post('/products/refund', productController.refundProduct) // 상품 환불하기

// 쿠폰 API
const couponController = new CouponController(pointService);
app.post('/coupons/buy', couponController.buyCoupon) // 쿠폰 구매하기

app.listen(3000)