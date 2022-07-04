import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import { Repository } from "../../interfaces";
import { CardContainer, Text, Title } from "./styles";

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
			<Text>Created at {created_at.split("T")[0]}</Text>
			<Text>Last pushed at {pushed_at.split("T")[0]}</Text>
			<Text>
				{stargazers_count} <FontAwesomeIcon icon={faStar} /> | {forks_count}{" "}
				<FontAwesomeIcon icon={faCodeBranch} />
			</Text>
		</CardContainer>
	);
}
