import styled from "styled-components";

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 80vh;
`;

export const Text = styled.p`
	font-size: 18px;
	font-weight: bold;
`;

export const ErrorMsg = styled(Text)`
	color: red;
`;

export const Logo = styled.img`
	width: 200px;
	height: 80px;
`;
