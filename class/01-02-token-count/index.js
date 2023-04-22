function getToken(x) {
	if (x === undefined) {
		console.log("error : x is undefined");
		return;
	} else if (x <= 0) {
		console.log("error : x is less than or equal to 0");
		return;
	} else if (x > 10) {
		console.log("error : x is greater than 10");
		return;
	}
	console.log("x is valid");
	let a = Math.random() * 10 ** x;
	a = String(Math.floor(a)).padStart(x, "0");
	return a;
}

console.log(getToken(-1));
