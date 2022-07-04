import { useState } from "react";
import { useHistory } from "react-router";
import { getRepos, getUser } from "../../services/api";
import { PageWrapper, Logo, Text, ErrorMsg } from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";
import { SearchForm } from "../../components/SearchForm";

export default function Home() {
	const [failedSearch, setFailedSearch] = useState(false);

	const history = useHistory();

	async function getData(searchValue: string): Promise<void> {
		try {
			const userResponse = await getUser(searchValue);
			const repoResponse = await getRepos(searchValue);

			console.log("user", userResponse.data);
			console.log("repos", repoResponse.data);

			localStorage.setItem("repositories", JSON.stringify(repoResponse.data));
			localStorage.setItem("user", JSON.stringify(userResponse.data));

			history.push("/search");
		} catch (e) {
			setFailedSearch(true);
		}
	}

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />
			<SearchForm onSubmit={getData} />
			{!failedSearch ? (
				<Text>Pesquise um nome de usuário</Text>
			) : (
				<ErrorMsg>Usuário não encontrado</ErrorMsg>
			)}
		</PageWrapper>
	);
}
