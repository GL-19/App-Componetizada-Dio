import { createContext, ReactNode, useState } from "react";
import { getRepos, getUser } from "../services/api";

interface User {
	name: string;
	email: string;
}

interface Repository {}

interface GithubContextData {
	user: User;
	repositories: Repository[];
	failedSearch: boolean;
	nextPage: number;
}

const GithubContext = createContext<GithubContextData>({} as GithubContextData);

interface GithubProviderProps {
	children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<User>({} as User);
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [nextPage, setNextPage] = useState(0);
	const [failedSearch, setFailedSearch] = useState(false);

	async function getGithubData(searchValue: String) {
		try {
			const userResponse = await getUser(searchValue);
			const repoResponse = await getRepos(searchValue);

			console.log("user", userResponse.data);
			console.log("repos", repoResponse.data);

			setUser(userResponse.data);
			localStorage.setItem("user", JSON.stringify(userResponse.data));

			setRepositories(repoResponse.data);
			localStorage.setItem("repositories", JSON.stringify(repoResponse.data));
		} catch (e) {
			setFailedSearch(true);
		}
	}

	return (
		<GithubContext.Provider value={{ user, repositories, failedSearch, nextPage }}>
			{children}
		</GithubContext.Provider>
	);
}
