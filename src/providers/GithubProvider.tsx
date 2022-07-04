import { createContext, ReactNode, useContext, useState } from "react";
import { getRepositories, getUser } from "../services/api";

export interface User {
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

export interface Repository {
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
	fetchGithubData: (searchValue: string) => Promise<void>;
	fetchMoreRepositories: () => Promise<void>;
}

const GithubContext = createContext<GithubContextData>({} as GithubContextData);

interface GithubProviderProps {
	children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<User>({} as User);
	const [userNotFound, setUserNotFound] = useState(false);
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [nextPage, setNextPage] = useState(1);

	async function fetchGithubData(searchValue: string) {
		try {
			const userResponse = await getUser(searchValue);

			const repoResponse = await getRepositories(searchValue, nextPage);

			console.log("user", userResponse.data);
			console.log("repos", repoResponse.data);

			setUser(userResponse.data);
			setRepositories(repoResponse.data);
			setUserNotFound(false);
			setNextPage(2);
		} catch {
			setUser({} as User);
			setRepositories([]);
			setNextPage(1);
			setUserNotFound(true);
		}
	}

	async function fetchMoreRepositories() {
		const { data } = await getRepositories(user.login, nextPage);

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
				fetchGithubData,
				fetchMoreRepositories,
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
