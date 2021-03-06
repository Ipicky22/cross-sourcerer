import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_REPOSITORIES_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			repositories(first: 100) {
				totalCount
				nodes {
					updatedAt
				}
			}
		}
	}
`;

function Header() {
	const { loading, error, data } = useQuery(GET_REPOSITORIES_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="content3">
			<div className="name2">Repositories</div>
			<div className="info">{data.user.repositories.totalCount}</div>
		</div>
	);
}
export default Header;
