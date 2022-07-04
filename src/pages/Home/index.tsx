import { useHistory } from "react-router";

import { PageWrapper, Logo, Text, ErrorMsg } from "./styles";
import githubLogo from "../../images/GitHub_Logo.png";
import { SearchForm } from "../../components/SearchForm";
import { useGithub } from "../../providers/GithubProvider";

export function Home() {
	const { userNotFound, fetchGithubData } = useGithub();

	const history = useHistory();

	async function handleSearch(searchValue: string): Promise<void> {
		await fetchGithubData(searchValue);

		history.push("/search");
	}

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />
			<SearchForm onSubmit={handleSearch} />
			{!userNotFound ? (
				<Text>Pesquise um nome de usuário</Text>
			) : (
				<ErrorMsg>Usuário não encontrado</ErrorMsg>
			)}
		</PageWrapper>
	);
}
