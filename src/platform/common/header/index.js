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
			<div>
				<Bio />
			</div>
			<div className="content">
				<ProfilePicture />
				<Repositories />
				<Followers />
				<Following />
			</div>
		</div>
	);
}

export default Header;
