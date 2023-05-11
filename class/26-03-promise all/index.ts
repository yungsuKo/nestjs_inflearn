// import axios from "axios";
// console.log("안녕하세요");
const aaa = async () => {
	const result = await new Promise((resolve, reject) => {});
};

const fetchData = async () => {
	console.log("1");
	console.time("=== 걸린 시간 각각 ===");
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
	console.timeEnd("=== 걸린 시간 각각 ===");
	console.log("3");
};

// fetchData();

const fetchData2 = async () => {
	console.time("=== 걸린 시간 각각 ===");
	await Promise.all([
		new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve("성공시 받는 데이터");
				} catch (error) {
					reject("실패시 받는 데이터");
				}
			}, 2000);
		}),
		new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve("성공시 받는 데이터");
				} catch (error) {
					reject("실패시 받는 데이터");
				}
			}, 2000);
		}),

		// console.log(axios.get("https://jsonplaceholder.typicode.com/posts/1")),
		new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve("성공시 받는 데이터");
				} catch (error) {
					reject("실패시 받는 데이터");
				}
			}, 2000);
		}),
	]);
	console.timeEnd("=== 걸린 시간 각각 ===");
	console.log("끝났다");
};

fetchData2();
