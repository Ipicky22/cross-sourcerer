import React from "react";
import "./index.css";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const { REACT_APP_LOGIN } = process.env;

const GET_COMMITS_INFOS = gql`
	query($login: String!) {
		user(login: $login) {
			repositories(first: 100) {
				totalCount
				nodes {
					defaultBranchRef {
						target {
							... on Commit {
								history {
									totalCount
									nodes {
										additions
										deletions
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

function Lines() {
	const { loading, error, data } = useQuery(GET_COMMITS_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	const repos = data.user.repositories.nodes;
	let nbLinesCodesAdditions = 0;
	let nbLinesCodesDeletions = 0;
	let nbLinesCodes = 0;

	repos.forEach(item => {
		if (item.defaultBranchRef != null) {
			item.defaultBranchRef.target.history.nodes.forEach(lines => {
				// Manque gestion d'erreur ou optionals pour éviter nodes of undefined
				nbLinesCodesAdditions += lines.additions;
				nbLinesCodesAdditions += lines.deletions;
			});
			nbLinesCodes = nbLinesCodesAdditions - nbLinesCodesDeletions;
		}
	});

	return (
		<div className="content2">
			<div className="title">Lines of code</div>
			<div className="title">{nbLinesCodes}</div>
		</div>
	);
}

export default Lines;
