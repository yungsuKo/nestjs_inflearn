import coolsms from "coolsms-node-sdk";

export async function sendTokenToSMS(fff, ggg) {
	// fff = 휴대폰 번호
	// ggg = 인증 번호
	const mysms = coolsms.default;
	const messageService = new mysms("sdf", sdf);
	const result = await messageService.sendOne({
		to: "",
		from: "",
		text: "",
	});
	console.log(result);
}
// coolsms-node-sdk
