import styled from "styled-components";

export const CardContainer = styled.div`
	width: 20rem;
	height: 15rem;
	padding: 1.33rem;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	background-color: var(--black);
	border-radius: 1rem;
`;

export const Title = styled.a`
	color: var(--lightGray);

	font-size: 1.125rem;
	font-weight: bold;
	text-align: center;
	text-decoration: none;

	&:hover {
		color: var(--darkGray);
		text-decoration: underline;
	}
`;

export const Text = styled.p`
	font-size: 0.875rem;
`;

export const Icon = styled.img`
	width: 1rem;
	height: 1rem;

	color: var(--darkGray);
`;
