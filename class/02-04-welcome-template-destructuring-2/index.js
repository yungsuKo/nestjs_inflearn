function getWelcomeTemplate({ name, age, school, createdAt }) {
	const result = `
		<html>
			<body>
				<h1>Welcome to the JavaScript Class</h1>
				<hr />
				<div> 이름: ${name}</div>
				<div> 나이: ${name}</div>
				<div> 학교: ${school}</div>
				<div> 가입일: ${createdAt}</div>
			</body>
		</html>
	`;
	return result;
}

console.log(
	getWelcomeTemplate({
		name: "홍길동",
		age: 20,
		school: "한빛대학교",
		createdAt: "2019-01-01",
	})
);
