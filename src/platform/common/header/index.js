import React from "react";
import "./index.css";
import ProfilePicture from "./profilepicture";
import Repositories from "./repositories";
import Followers from "./followers";
import Following from "./following";

function Header() {
	return (
		<div>
			<ProfilePicture />
			<Repositories />
			<Followers />
			<Following />
		</div>
	);
}

export default Header;
