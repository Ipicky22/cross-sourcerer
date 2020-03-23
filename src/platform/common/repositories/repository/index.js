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
			repositories(first: 2) {
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
						}
					}
					defaultBranchRef {
						target {
							... on Commit {
								history {
									totalCount
								}
							}
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
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

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
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={classes.heading}>{repo.name}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
							amet blandit leo lobortis eget.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	});
}

export default Repository;
