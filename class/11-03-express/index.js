import express from 'express'

const app = express()

// api 2개를 만들어 볼 것임
// 상품 구매하기
app.post('/products/buy', async(req, res) => {
    // 1. 가진 돈을 검증하는 코드(대략 10줄)
    // ...
    // ...
    // ...
    
    // 2. 판매여부를 검증하는 코드
    // ...
    // ...
    // ...

    // 3. 상품 구매하는 코드
    // if(돈있음 && !판매완료){
    //     return res.send('구매 완료!')
    // }

    
})

// 상품 환불하기
app.post('/products/refund', async(req, res) => {
    
    // 1. 판매여부를 검증하는 코드
    // ...
    // ...
    // ...

    // 2. 상품 환불하는 코드
    // if(판매완료){
    //     return res.send('환불 완료!')
    // }

})

app.listen(3000, function(){
    console.log("I'm running")
})