import express from "express";
import { ProductService } from "./product.js";
import { CashService } from "./cash.js";

const app = express();

app.post("/products/buy", (req, res) => {
    // 1. 가진 돈 검증
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();

    // 2. 판매여부 검증
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldOut();

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldOut) {
        // 구매
    }
});

app.post("/products/refund", (req, res) => {
    // 1. 판매여부 검증
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldOut();

    // 2. 상품 환불하는 코드
    if (isSoldOut) {
        // 환불
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
