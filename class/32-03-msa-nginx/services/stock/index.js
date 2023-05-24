import express from "express";
const app = express();

setTimeout(() => {}, 3000);

[].map(() => {});

// 주식가격 조회하기
app.get("/stocks", function (req, res) {
    res.send("aaa");
});

// 주식최대가격 조회하기
app.get("/stocks/max", function (req, res) {
    res.send("aaa");
});

// 신규주식 등록하기
app.post("/stocks", function (req, res) {
    res.send("aaa");
});

app.listen(3002);
