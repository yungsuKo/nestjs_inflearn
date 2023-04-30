import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

const typeDefs = gql`
	type BoardReturn {
		number: Int
		writer: String
		title: String
		contents: String
	}

	input CreateBoardInput {
		writer: String
		title: String
		contents: String
	}

	type Query {
		fetchBoards: [BoardReturn]
	}

	type Mutation {
		createBoard(writer: String, title: String, contents: String): String
		createBoard2(createBoardInput: CreateBoardInput): String
		createTokenOfPhone(myphone: String): String
	}
`;

const resolvers = {
	Query: {
		fetchBoards: () => {
			const result = [
				{
					number: 1,
					writer: "철수",
					title: "안녕하세요",
					contents: "2021-01-01",
				},
				{
					number: 2,
					writer: "영희",
					title: "반갑습니다",
					contents: "2021-01-02",
				},
				{
					number: 3,
					writer: "훈이",
					title: "또 만났네요",
					contents: "2021-01-03",
				},
			];
		},
	},
	Mutation: {
		createBoard: (_, args) => {
			console.log(args);
			return "생성 성공";
		},
		createBoard2: (_, args) => {
			console.log(args);
			return "생성 성공";
		},
		createTokenOfPhone: (_, args) => {
			const isValid = checkValidationPhone(args.myphone);
			if (isValid) {
				// 2. 핸드폰 토큰 6자리 만들기
				const mytoken = getToken(5);

				// 3. 핸드폰번호에 토큰 전송하기
				sendTokenToSMS(args.myphone, mytoken);
				return "생성 성공";
			}
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3001).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
