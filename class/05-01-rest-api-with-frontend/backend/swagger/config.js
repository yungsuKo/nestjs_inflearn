export default {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "나만의 API 서버",
			version: "1.0.0",
		},
	},
	apis: ["./swagger/*.swagger.js"], // files containing annotations as above
};
