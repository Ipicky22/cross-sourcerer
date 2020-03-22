import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
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
	const { loading, error, data } = useQuery(GET_USER_INFOS, {});
	return (
		<ApolloProvider client={client}>
			<div>
				<img src={client.data.viewer.avatarUrl} alt="Logo" />
				<h2>My first Apollo app </h2>
			</div>
		</ApolloProvider>
	);

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// );
}

export default App;
