import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_REPOSITORIES_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			repositories {
				totalCount
			}
		}
	}
`;

function Repositories() {
	const { loading, error, data } = useQuery(GET_REPOSITORIES_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="content2">
			<div className="title">Repositories</div>
			<div className="title">{data.user.repositories.totalCount}</div>
		</div>
	);
}

export default Repositories;
