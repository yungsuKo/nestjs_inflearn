import {
    checkValidationEmail,
    getEmailTemplate,
    sendMessageToEmail,
} from "./email.js";
import express from "express";
const app = express();
app.use(express.json());
function getWelcomeTemplate(user) {
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationEmail(user.email);
    if (isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const message = getEmailTemplate(user);
        // 3. 핸드폰번호에 토큰 전송하기
        sendMessageToEmail(user.email, message);
    }
}

const myuser = {
    name: "처ㄹ스",
    age: 8,
    school: "한빛대학교",
    email: "aaa@aaa",
};

app.post("/users", (req, res) => {
    const { name, age, school, email } = req.body;

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(email);
    if (isValid === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendMessageToEmail(email, myTemplate);
    res.send("가입완료!!!");
});

app.listen(3000, () => {
    console.log("백엔드 API 서버가 켜졌어요!!!");
});
