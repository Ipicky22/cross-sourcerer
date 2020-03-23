import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_PROFILPICTURE_INFOS = gql`
	query {
		viewer {
			avatarUrl
		}
	}
`;

function ProfilePicture() {
	const { loading, error, data } = useQuery(GET_PROFILPICTURE_INFOS);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className="profile-img-container">
			<img className="profile-img" src={data.viewer.avatarUrl} alt="profile" />
		</div>
	);
}

export default ProfilePicture;
