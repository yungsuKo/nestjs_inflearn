function getWelcomeTemplate(user) {
	const result = `
		<html>
			<body>
				<h1>Welcome to the JavaScript Class</h1>
				<hr />
				<div> 이름: ${user.name}</div>
				<div> 나이: ${user.name}</div>
				<div> 학교: ${user.school}</div>
				<div> 가입일: ${user.createdAt}</div>
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
