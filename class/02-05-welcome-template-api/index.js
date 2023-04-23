import {
	checkValidationEmail,
	getEmailTemplate,
	sendMessageToEmail,
} from "./email.js";
console.log("안녕하세요~~");

function createMessageToEmail(user) {
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
createMessageToEmail(myuser);
