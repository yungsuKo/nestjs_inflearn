export class ProductController{
    moneyService; // 미리 선언해주지 않아도 됨
    constructor(moneyService, productService){
        this.moneyService = moneyService
        this.productService = productService
    }

    buyProduct = (req, res) => {
        // 1. 가진 돈을 검증하는 코드(10줄 => 2줄)
        // const cashService = new CashService()
        const hasMoney = this.moneyService.checkValue(); // true/ false를 리턴    
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout(); // true/ false를 리턴
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout){
            return res.send('쿠폰 ㅊㅊ구매 완료!')
        }
    }

    refundProduct = (req , res) => {
        // 1. 판매여부를 검증하는 코드
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout(); // true/ false를 리턴

        // 2. 상품 환불하는 코드
        if(isSoldout){
            return res.send('환불 완료!')
        } else{
            return res.send('환불 불가!')
        }

    }
}