import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_USER_INFOS = gql`
	query {
		viewer {
			avatarUrl
		}
	}
`;

function ProfilePicture() {
	const { loading, error, data } = useQuery(GET_USER_INFOS);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div>
			<img src={data.viewer.avatarUrl} alt="Logo" />
		</div>
	);
}

export default ProfilePicture;
