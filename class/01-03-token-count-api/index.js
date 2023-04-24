function createToken(myphone) {
	// 1. check myphone is valid
	if (myphone === undefined) {
		console.log("error : myphone is undefined");
		return;
	} else if (myphone.length !== 10 && myphone.length !== 11) {
		console.log("error : myphone is not 10, 11 digits");
		return;
	} else if (myphone[0] !== "0") {
		console.log("error : myphone does not start with 0");
		return;
	}

	// 2. create token
	let a = Math.random() * 10 ** 6;
	a = String(Math.floor(a)).padStart(6, "0");
	// 3. return token
	console.log(myphone, "으로", a, "를 발송했습니다.");
	// 4. log token
}

createToken("01012345678");
