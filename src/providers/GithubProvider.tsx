import { createContext, ReactNode, useContext, useState } from "react";
import { getRepos, getUser } from "../services/api";

interface User {
	avatar_url: string;
	html_url: string;
	name: string;
	login: string;
	location: string;
	company: string;
	email: string;
	blog: string;
	twitter_username: string;
}

interface Repository {
	name: string;
	description: string;
	created_at: string;
	pushed_at: string;
	clone_url: string;
	forks_count: string;
	stargazers_count: string;
}

interface GithubContextData {
	user: User;
	repositories: Repository[];
	userNotFound: boolean;
	nextPage: number;
	getGithubData: (searchValue: string) => Promise<void>;
	getMoreRepositories: () => Promise<void>;
}

const GithubContext = createContext<GithubContextData>({} as GithubContextData);

interface GithubProviderProps {
	children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<User>({} as User);
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [nextPage, setNextPage] = useState(1);
	const [userNotFound, setUserNotFound] = useState(false);

	async function getGithubData(searchValue: string) {
		try {
			const userResponse = await getUser(searchValue);

			const repoResponse = await getRepos(searchValue);

			console.log("user", userResponse.data);
			console.log("repos", repoResponse.data);

			setUser(userResponse.data);
			localStorage.setItem("user", JSON.stringify(userResponse.data));

			setRepositories(repoResponse.data);
			localStorage.setItem("repositories", JSON.stringify(repoResponse.data));

			setUserNotFound(false);
			setNextPage(2);
		} catch {
			setUserNotFound(true);
		}
	}

	async function getMoreRepositories() {
		const { data } = await getRepos(user.login, nextPage);

		setRepositories([...repositories, ...data]);

		setNextPage(nextPage + 1);
	}

	return (
		<GithubContext.Provider
			value={{
				user,
				repositories,
				userNotFound,
				nextPage,
				getGithubData,
				getMoreRepositories,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
}

export function useGithub() {
	const context = useContext(GithubContext);

	return context;
}
