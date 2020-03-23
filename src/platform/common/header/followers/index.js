import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_FOLLOWERS_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			followers {
				totalCount
			}
		}
	}
`;

function Followers() {
	const { loading, error, data } = useQuery(GET_FOLLOWERS_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="content2">
			<div className="title">followers</div>
			<div className="title">{data.user.followers.totalCount}</div>
		</div>
	);
}

export default Followers;
