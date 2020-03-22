import React from "react";
import "./App.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_USER_INFOS = gql`
	query {
		viewer {
			avatarUrl
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_USER_INFOS);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div>
			<img src={data.viewer.avatarUrl} alt="Logo" />
			<h2>My first Apollo app </h2>
		</div>
	);
}

export default App;
