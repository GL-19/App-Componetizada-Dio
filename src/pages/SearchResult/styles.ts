import styled from "styled-components";

export const PageWrapper = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 2rem;
`;

export const CardsWrapper = styled.div`
	width: 80vw;

	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;

	gap: 1.25rem;
`;

export const Logo = styled.img`
	width: 200px;
	height: 80px;
`;
