import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_FOLLOWING_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			following {
				totalCount
			}
		}
	}
`;

function Following() {
	const { loading, error, data } = useQuery(GET_FOLLOWING_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="content2">
			<div className="title">Following</div>
			<div className="title">{data.user.following.totalCount}</div>
		</div>
	);
}

export default Following;
