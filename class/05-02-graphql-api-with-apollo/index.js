import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
	type Query {
		hello: String
		fetchBoardsCount: Int
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hello World!",
		fetchBoardsCount: () => 10,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3001).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
