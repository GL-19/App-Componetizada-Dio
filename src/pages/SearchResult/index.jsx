import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Card, Profile } from "../../components";
import { getRepos } from "../../services/api";
import { PageWrapper, CardsWrapper, Logo } from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";

export default function SearchResult() {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [nextPage, setNextPage] = useState(0);

	const history = useHistory();

	useEffect(() => {
		if (localStorage.getItem("user")) {
			const user = JSON.parse(localStorage.getItem("user"));
			const repositories = JSON.parse(localStorage.getItem("repositories"));

			setRepos(repositories);
			setUser(user);
			setNextPage(2);

			localStorage.clear();
		} else {
			history.push("/");
		}
	}, [history]);

	async function handleFetchMore() {
		const response = await getRepos(user.login, nextPage);

		setRepos([...repos, ...response.data]);

		setNextPage(nextPage + 1);
	}

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />

			{user.login && <Profile userData={user} />}

			<CardsWrapper>
				{repos.map((repo) => (
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

			{repos.length === 20 * (nextPage - 1) ? (
				<button onClick={handleFetchMore}>Fetch More</button>
			) : (
				""
			)}
		</PageWrapper>
	);
}
