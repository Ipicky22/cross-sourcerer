import React from "react";
import "./index.css";
import Bio from "./bio";
import ProfilePicture from "./profilepicture";
import Repositories from "./repositories";
import Followers from "./followers";
import Following from "./following";

function Header() {
	return (
		<div>
			<Bio />
			<ProfilePicture />
			<Repositories />
			<Followers />
			<Following />
		</div>
	);
}

export default Header;
