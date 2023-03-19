import { ProductService } from './services/product.service'
import { CashService } from './services/cash.service';

export class ProductController{
    buyProduct = () => {
        // 1. 가진 돈을 검증하는 코드(10줄 => 2줄)
        const cashService = new CashService()
        const hasMoney = cashService.checkValue(); // true/ false를 리턴
        
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout(); // true/ false를 리턴
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout){
            return res.send('쿠폰 ㅊㅊ구매 완료!')
        }
    }

    refundProduct = () => {
        // 1. 판매여부를 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout(); // true/ false를 리턴

        // 2. 상품 환불하는 코드
        if(isSoldout){
            return res.send('환불 완료!')
        }

    }
}