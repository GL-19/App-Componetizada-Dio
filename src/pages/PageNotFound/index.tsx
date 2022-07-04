import styled from "styled-components";

export function PageNotFound() {
	return (
		<PageWrapper>
			<h1>Page not found!</h1>
		</PageWrapper>
	);
}

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 80vh;
`;
