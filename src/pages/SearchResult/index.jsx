import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Card, Profile } from "../../components";
import { getRepos, getUser } from "../../services/api";
import {
	PageWrapper,
	CardsWrapper,
	SearchWrapper,
	Logo,
	Button,
	Warning,
} from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";

export default function SearchResult() {
	const [searchValue, setSearchValue] = useState("");
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [nextPage, setNextPage] = useState(0);
	const [failedSearch, setFailedSearch] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (localStorage.getItem("user")) {
			const repositories = JSON.parse(localStorage.getItem("repositories"));
			const user = JSON.parse(localStorage.getItem("user"));

			setRepos(repositories);
			setUser(user);
			setNextPage(2);
			setSearchValue(user?.login);

			localStorage.clear();
		} else if (!failedSearch) {
			history.push("/");
		}
	}, [failedSearch, history]);

	function handleSearch() {
		getRepos(searchValue)
			.then((response) => {
				setRepos(response.data);
				setFailedSearch(false);
			})
			.catch(() => {
				setRepos([]);
				setFailedSearch(true);
			});
		getUser(searchValue)
			.then((response) => {
				setUser(response.data);
				setFailedSearch(false);
			})
			.catch(() => {
				setUser({});
				setFailedSearch(true);
			});
	}

	function handleKeyPress(e) {
		if (e.key === "Enter") {
			handleSearch();
		}
	}

	async function handleFetchMore() {
		const response = await getRepos(user.login, nextPage);

		setRepos([...repos, ...response.data]);

		setNextPage(nextPage + 1);
	}

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />
			<SearchWrapper>
				<input
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<Button type="submit" onClick={handleSearch}>
					Pesquisar
				</Button>
			</SearchWrapper>
			{failedSearch && <Warning>Usuário não encontrado</Warning>}
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
