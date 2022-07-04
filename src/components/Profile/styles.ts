import styled from "styled-components";

export const ProfileContainer = styled.div`
	min-width: 25rem;
	padding: 2rem;

	display: flex;
	align-items: flex-start;
	gap: 2rem;

	border-radius: 1rem;

	background-color: rgb(17, 17, 17);
	color: var(--ligthGray);

	@media (max-width: 600px) {
		min-width: 18rem;
		padding: 1.33rem;

		flex-direction: column;
		align-items: center;

		gap: 0.75rem;
	}
`;

export const PhotoContainer = styled.div`
	min-width: 7.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 0.5rem;

	overflow: hidden;
`;

export const InfoContainer = styled.div`
	padding: 1rem;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 0.25rem;
	overflow: hidden;
`;

export const Title = styled.h1`
	font-size: 1rem;
	font-weight: bold;
`;

export const Icon = styled.img`
	width: 1.25rem;
	height: 1.25rem;
`;

export const Text = styled.p`
	font-size: 1rem;
	svg {
		margin-right: 0.5rem;
	}
`;

export const Link = styled.a`
	font-size: 1rem;
	font-style: italic;
	text-decoration: none;

	&:hover,
	&:active {
		color: var(--veryDarkGray);
		text-decoration: underline;
	}

	svg {
		margin-right: 0.5rem;
	}
`;

export const Photo = styled.img`
	width: 7.5rem;
	height: 7.5rem;
	border-radius: 50%;
`;
