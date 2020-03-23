import React from "react";
import "./index.css";
import Avatar from "@material-ui/core/Avatar";
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
		<div>
			<Avatar src={data.viewer.avatarUrl} />
		</div>
	);
}

export default ProfilePicture;
