import { useEffect } from "react";
import { useHistory } from "react-router";
import { useGithub } from "../../providers/GithubProvider";

import { Card, Profile } from "../../components";
import { PageWrapper, CardsWrapper, Logo } from "./styles";

import githubLogo from "../../images/GitHub_Logo.png";

export function SearchResult() {
	const { user, repositories, nextPage, fetchMoreRepositories } = useGithub();
	const history = useHistory();

	useEffect(() => {
		if (Object.keys(user).length <= 0) history.push("/");
	}, [user, history]);

	return (
		<PageWrapper>
			{user.login && (
				<>
					<Logo src={githubLogo} alt="Logo Github" />

					<Profile user={user} />

					<CardsWrapper>
						{repositories.map((repository) => (
							<Card key={repository.name} repository={repository} />
						))}
					</CardsWrapper>

					{repositories.length === 20 * (nextPage - 1) ? (
						<button onClick={fetchMoreRepositories}>Fetch More</button>
					) : (
						""
					)}
				</>
			)}
		</PageWrapper>
	);
}
