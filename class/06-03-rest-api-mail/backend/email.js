import { getCreateDate } from "./utils.js";
import "dotenv/config";
import nodemailer from "nodemailer";

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

export async function sendMessageToEmail(myemail, message) {
	const EMAIL_USER = process.env.EMAIL_USER;
	const EMAIL_PASS = process.env.EMAIL_PASS;
	const EMAIL_SENDER = process.env.EMAIL_SENDER;
	let testAccount = await nodemailer.createTestAccount();
	console.log("testAccount:", testAccount);

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: EMAIL_USER, // generated ethereal user
			pass: EMAIL_PASS, // generated ethereal password
		},
	});

	let result = await transporter.sendMail({
		from: EMAIL_SENDER, // sender address
		to: myemail, // list of receivers
		subject: "Hello ✔", // Subject line
		html: message, // html body
	});

	console.log(result);
}
