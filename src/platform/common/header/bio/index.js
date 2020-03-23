import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_BIO_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			bio
			name
			company
			email
			location
		}
	}
`;

function Bio() {
	const { loading, error, data } = useQuery(GET_BIO_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="content">
			<div className="name">{data.user.name}</div>
			<div className="infos">
				<div>
					<div>email: {data.user.email}</div>
					<div>company: {data.user.company}</div>
				</div>
				<div>
					<div>bio: {data.user.bio}</div>
					<div>location: {data.user.location}</div>
				</div>
			</div>
		</div>
	);
}

export default Bio;
