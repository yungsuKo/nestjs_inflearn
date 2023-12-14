import express from 'express';

const app = express();

app.post('/products/buy', (req, res) => {
  // 1. 가진 돈 검증
  // 2. 판매여부 검증
  // 3. 상품 구매하는 코드
});

app.post('/products/refund', (req, res) => {
  // 1. 구매여부 검증
  // 2. 상품 환불하는 코드
});
