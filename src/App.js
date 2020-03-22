import React from "react";
import "./App.css";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Query } from "react-apollo";
require("dotenv").config();

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	request: operation => {
		operation.setContext({
			headers: {
				Authorization: `Bearer `,
			},
		});
	},
});

const GET_USER_INFOS = gql`
	query {
		viewer {
			avatarUrl
		}
	}
`;

client
	.query({
		query: GET_USER_INFOS,
	})
	.then(console.log);

function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<Query query={GET_USER_INFOS}>
					{({ loading, error, data }) => {
						if (loading) return <div>Fetching</div>;
						if (error) return <div>Error</div>;

						return (
							<div>
								<img src={data.viewer.avatarUrl} alt="Logo" />
							</div>
						);
					}}
				</Query>

				<h2>My first Apollo app </h2>
			</div>
		</ApolloProvider>
	);
}

export default App;
