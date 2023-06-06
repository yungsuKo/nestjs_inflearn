import { getCreateDate } from "./utils.js";

export function checkValidationEmail(myphone) {
	return true;
}

export function getEmailTemplate({ name, age, school, email }) {
	const createdAt = getCreateDate();
	return `
    <html>
        <body>
            <h1>Welcome to the JavaScript Class</h1>
            <hr />  
            <div> 이름: ${name}</div>
            <div> 나이: ${age}</div>
            <div> 학교: ${school}</div>
            <div> 이메일: ${email}</div>
            <div> 가입일: ${createdAt}</div>
        </body>
    </html>
    `;
}

export function sendMessageToEmail(myemail, message) {
	console.log(myemail + "번호로 인증번호" + message + "를 전송합니다!!");
}
