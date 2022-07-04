import styled from "styled-components";

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;

export const SearchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
	width: 80vw;
`;

export const Warning = styled.p`
	color: red;
	font-size: 18px;
	font-weight: bold;
`;

export const Logo = styled.img`
	width: 200px;
	height: 80px;
`;

export const Input = styled.input``;

export const Button = styled.button`
	background-color: black;
	color: white;
`;
