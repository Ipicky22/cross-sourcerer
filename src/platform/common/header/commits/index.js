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

function Commits() {
	const { loading, error, data } = useQuery(GET_COMMITS_INFOS, {
		variables: { login: REACT_APP_LOGIN },
	});

	if (loading) return null;
	if (error) return `Error! ${error}`;

	const repos = data.user.repositories.nodes;
	let nbCommits = 0;

	repos.forEach(item => {
		if (item.defaultBranchRef != null) {
			nbCommits += item.defaultBranchRef.target.history.totalCount;
		}
	});

	return (
		<div className="content2">
			<div className="title">Commits</div>
			<div className="title">{nbCommits}</div>
		</div>
	);
}

export default Commits;
