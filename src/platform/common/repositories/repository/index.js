import React from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_REPOSITORY_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			repositories(first: 100) {
				totalCount
				nodes {
					name
					nameWithOwner
					assignableUsers {
						totalCount
					}
					collaborators(first: 10) {
						totalCount
						nodes {
							login
							avatarUrl
						}
					}
					languages(first: 100) {
						totalCount
						nodes {
							name
							color
						}
					}
				}
			}
		}
	}
`;

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		marginBottom: 8,
	},
	heading: {
		fontSize: 20,
		fontWeight: 500,
		color: "#FFFFFF",
	},
	panelHeader: {
		backgroundColor: "#3d4047",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	panel: {
		backgroundColor: "transparent",
	},
	panelDetails: {
		backgroundColor: "#505359",
		display: "flex",
		flexDirection: "column",
	},
	div: {
		display: "flex",
		flexDirection: "column",
	},
	collabParent: {
		display: "flex",
		flexDirection: "row",
		marginBottom: 8,
	},
	collab: {
		textAlign: "center",
		color: "white",
	},
	languageParent: {
		display: "flex",
		flexDirection: "row",
	},
	lang: {
		display: "flex",
		flexDirection: "row",
		marginTop: 8,
		margin: 8,
		backgroundColor: "#3d4047",
		padding: 20,
		borderRadius: 5,
		alignItems: "center",
	},
	langText: {
		color: "white",
	},
	langColor: {
		width: 20,
		height: 20,
		borderRadius: 100,
		marginLeft: 16,
	},
}));

function pastille(color) {
	return <div style={{ backgroundColor: color, width: 20, height: 20, borderRadius: 100, marginLeft: 16 }}></div>;
}

function Repository() {
	const classes = useStyles();

	const { loading, error, data } = useQuery(GET_REPOSITORY_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return data.user.repositories.nodes.map((repo, index) => {
		return (
			<div className={classes.root} key={index}>
				<ExpansionPanel className={classes.panel}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						className={classes.panelHeader}
					>
						<Typography className={classes.heading}>{repo.name}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.panelDetails}>
						<div className={classes.div}>
							<div className={classes.collabParent}>
								{repo.collaborators.nodes.map((collaborator, index) => {
									return (
										<div key={index}>
											<div className="profile-img-container">
												<img
													className="profile-img"
													src={collaborator.avatarUrl}
													alt="profile"
												/>
											</div>
											<div className={classes.collab}>{collaborator.login}</div>
										</div>
									);
								})}
							</div>
							<div className={classes.languageParent}>
								{repo.languages.nodes.map((language, index) => {
									return (
										<div key={index} className={classes.lang}>
											<div className={classes.langText}>{language.name}</div>
											{pastille(language.color)}
										</div>
									);
								})}
							</div>
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	});
}

export default Repository;
