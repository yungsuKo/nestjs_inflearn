import { ProductService } from "./services/product.js";
import { CashService } from "./services/cash.js";

export class ProductController {
    buyProduct = (req, res) => {
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();

        // 2. 판매여부 검증
        const productService = new ProductService();
        const isSoldOut = productService.checkSoldOut();

        // 3. 상품 구매하는 코드
        if (hasMoney && !isSoldOut) {
            res.send("구매 성공");
        }
    };

    refundProduct = (req, res) => {
        const productService = new ProductService();
        const isSoldOut = productService.checkSoldOut();

        // 2. 상품 환불하는 코드
        if (isSoldOut) {
            res.send("환불 성공");
        }
    };
}
