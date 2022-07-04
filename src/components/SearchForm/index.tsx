import { FormEvent, useState } from "react";
import styled from "styled-components";

interface SearchFormProps {
	onSubmit: (searchValue: string) => Promise<void>;
}

export function SearchForm({ onSubmit }: SearchFormProps) {
	const [searchValue, setSearchValue] = useState("");

	async function handleSearch(event: FormEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();

		onSubmit(searchValue);
	}

	return (
		<Form onSubmit={handleSearch}>
			<input
				type="text"
				minLength={1}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<SearchButton type="submit">Pesquisar</SearchButton>
		</Form>
	);
}

export const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const SearchButton = styled.button`
	background-color: black;
	color: white;
`;
