import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
const app = express();
const port = 3000;

const results = [
	{ number: 1, title: "게시물 제목1", content: "게시물 내용1" },
	{ number: 2, title: "게시물 제목2", content: "게시물 내용2" },
	{ number: 3, title: "게시물 제목3", content: "게시물 내용3" },
];

app.use(express.json());

app.get("/boards", (req, res) => {
	// 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
	// 2. 조회한 데이터를 클라이언트에게 응답
	res.send(results);
});

app.post("/boards", (req, res) => {
	const result = req.body;
	console.log(result);
	// 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
	results.push(result);
	// 2. 조회한 데이터를 클라이언트에게 응답
	res.send(result);
});

app.post("/tokens", (req, res) => {
	const { myphone, count } = req.body;
	const isValid = checkValidationPhone(myphone);
	if (isValid) {
		// 2. 핸드폰 토큰 6자리 만들기
		const mytoken = getToken(count);

		// 3. 핸드폰번호에 토큰 전송하기
		sendTokenToSMS(myphone, mytoken);
	}
	res.send("전송완료");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
