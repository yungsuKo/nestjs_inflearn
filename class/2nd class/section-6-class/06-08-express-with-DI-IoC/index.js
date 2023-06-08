import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";

const app = express();

// 의존성 주입으로 발생하는 장점
// 1. new 한번으로 모든곳에서 재사용 가능(싱글톤패턴)
// 2. 의존성 주입으로 몽땅 한 번에 변경 가능
// 3. 의존성 주입으로 쿠폰 구매 방식을 포인트결제로 안전하게 변경 가능

// [부가설명]
// 1. ProductController 가 cashService에 의존하고 있음
//    => 이 상황을 "강하게 결합되어 있따"고 표현
//    => tight coupling

// 2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있었음
//    => loose coupling
//    => 의존성 주입(Dependency Injection)이라는 개념이 나옴
//    => 이 역할을 대신 해주는 Nestjs 도구 => IoC(Inversion of Control) Container
//    => 알아서 new해서 넣어줌 - 알아서 DI 해줌

// 3. "의존성주입"으로 싱글톤패턴 구현 가능해짐
//    => "의존성주입"이면 무조건 "싱글톤 패턴"이 아닌가? => 아님
const cashService = new CashService();
const productService = new ProductService();

const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct);
app.post("/products/refund", productController.refundProduct);

const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
