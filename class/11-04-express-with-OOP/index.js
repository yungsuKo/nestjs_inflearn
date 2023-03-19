import express from 'express'
import { CashServices } from './cash'
import { ProductService } from './product'

const app = express()

// api 2개를 만들어 볼 것임
// 상품 구매하기
app.post('/products/buy', async(req, res) => {
    // 1. 가진 돈을 검증하는 코드(10줄 => 2줄)
    const cashService = new CashServices()
    const hasMoney = cashService.checkValue(); // true/ false를 리턴
    // 추상화 되었다고 판단함.

    // 2. 판매여부를 검증하는 코드
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout(); // true/ false를 리턴

    // 3. 상품 구매하는 코드
    if(hasMoney && !isSoldout){
        return res.send('구매 완료!')
    }

    
})

// 상품 환불하기
app.post('/products/refund', async(req, res) => {
    // 1. 판매여부를 검증하는 코드
    const productService = new ProductService()
    const isSoldout = productService.checkSoldout(); // true/ false를 리턴

    // 2. 상품 환불하는 코드
    if(isSoldout){
        return res.send('환불 완료!')
    }

})

app.listen(3000, function(){
    console.log("I'm running")
})