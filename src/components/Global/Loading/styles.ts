import styled from "styled-components";

interface LoadingProps {
	animation: boolean
}

export const StyledLoading = styled.div<LoadingProps>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-image: linear-gradient(to bottom right, #ffffff, #82a91f, #0a4c42);
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${(props) =>props.animation && " puff-out-center 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) both"};

	@keyframes puff-out-center {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-filter: blur(0px);
			filter: blur(0px);
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(2);
			transform: scale(2);
			-webkit-filter: blur(4px);
			filter: blur(4px);
			opacity: 0;
		}
	}

	img {
		max-width: 50%;
		-webkit-animation: shake-vertical 4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
		animation: shake-vertical 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
	}

	p {
		font-size: 42px;
		color: white;
		font-family: "Salsa", cursive;
	}
`;