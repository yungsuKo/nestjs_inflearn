export class CouponController {
    constructor(moneyService){
        this.moneyService = moneyService
    }
    buyCoupon = (req, res) => {
        // const cashService = new CashService()
        const hasMoney = this.moneyService.checkValue(); // true/ false를 리턴
    
        // 3. 상품 구매하는 코드
        if(hasMoney){
            return res.send('쿠폰 ㅊㅊ구매 완료!')
        }
    }
}