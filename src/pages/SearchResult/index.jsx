import { useEffect } from "react";
import { useHistory } from "react-router";
import { Card, Profile } from "../../components";

import { PageWrapper, CardsWrapper, Logo } from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";
import { useGithub } from "../../providers/GithubProvider";

export default function SearchResult() {
	const { user, repositories, nextPage, getMoreRepositories } = useGithub();
	const history = useHistory();

	useEffect(() => {
		if (Object.keys(user).length <= 0) history.push("/");
	}, [user, history]);

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />

			{user.login && <Profile userData={user} />}

			<CardsWrapper>
				{repositories.map((repo) => (
					<Card
						name={repo.name}
						description={repo.description}
						createDate={repo.created_at}
						lastUpdateDate={repo.pushed_at}
						url={repo.clone_url}
						forks={repo.forks_count}
						stars={repo.stargazers_count}
					/>
				))}
			</CardsWrapper>

			{repositories.length === 20 * (nextPage - 1) ? (
				<button onClick={getMoreRepositories}>Fetch More</button>
			) : (
				""
			)}
		</PageWrapper>
	);
}
