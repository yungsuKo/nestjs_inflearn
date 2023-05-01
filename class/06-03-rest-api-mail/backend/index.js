import express from "express";
import "dotenv/config";
const app = express();
import {
	checkValidationEmail,
	getEmailTemplate,
	sendMessageToEmail,
} from "./email.js";

// ... 생략

app.use(express.json());

app.post("/users", (req, res) => {
	const user = req.body.myuser;
	console.log(user);
	// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
	const isValid = checkValidationEmail(user.email);
	if (isValid) {
		// 2. 가입환영 템플릿 만들기
		const mytemplate = getEmailTemplate(user);

		// 3. 이메일에 가입환영 템플릿 전송하기
		sendMessageToEmail(user.email, mytemplate);
		res.send("가입완료!!!");
	}
});

app.listen(3000, () => {
	console.log("백엔드 API 서버가 켜졌어요!!!");
});
