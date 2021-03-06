import styled from "styled-components";

export const StyledLoading = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	gap: 40px;
	background-image: linear-gradient(to bottom right, #ffffff, #82a91f, #0a4c42);
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
	
		width: 220px;
		text-shadow: var(--textShadowBlack);
		font-size: 42px;
		color: white;
		font-family: "Salsa", cursive;
	}

`;
