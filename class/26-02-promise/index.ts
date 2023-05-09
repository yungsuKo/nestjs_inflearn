// console.log("안녕하세요");
const aaa = async () => {
	const result = await new Promise((resolve, reject) => {});
};

const fetchData = async () => {
	console.log("1");
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve("성공시 받는 데이터");
			} catch (error) {
				reject("실패시 받는 데이터");
			}
		}, 2000);
	}).then((res) => {
		console.log("2");
	});
	console.log("3");
};

fetchData();
