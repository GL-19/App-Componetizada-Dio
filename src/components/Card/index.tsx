import { CardContainer, Text, Title, Icon } from "./styles";
import starIcon from "../../images/star.png";
import forkIcon from "../../images/fork.png";
import { Repository } from "../../providers/GithubProvider";

interface CardProps {
	repository: Repository;
}

export function Card({ repository }: CardProps) {
	const { name, created_at, pushed_at, clone_url, forks_count, stargazers_count } =
		repository;

	return (
		<CardContainer>
			<Title href={clone_url} target="_blank" rel="noreferrer">
				{name}
			</Title>
			<Text>Criado em {created_at.split("T")[0]}</Text>
			<Text>Atualizado em {pushed_at.split("T")[0]}</Text>
			<Text>
				{stargazers_count} <Icon src={starIcon} /> | {forks_count} <Icon src={forkIcon} />
			</Text>
		</CardContainer>
	);
}
