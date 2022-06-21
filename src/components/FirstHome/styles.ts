import styled from "styled-components";
import bg from "../../assets/headerimg1.jpg";

interface LoadingProps {
	animation: boolean
}

export const StyledDiv = styled.div`
	width: 100%;
	height: 70vh;
	background: url(${bg});
	background-size: auto;
`;

export const StyledMain = styled.main`
	padding-top: 20px;
	padding-bottom: 20px;

	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 800px;

	border-radius: 5px;

	.slider {
		li {
		}
	}

	&:hover {
	}

	header {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 50px;
		padding: 0 10px;

		@media (max-width: 600px) {
			flex-direction: column;
			gap: 20px;
		}
	}
`;

export const StyledTitle = styled.h1`
	font-size: 40px;
	font-family: "Salsa", cursive;

	width: fit-content;
	padding: 5px 20px;

	border: 2px solid var(--green50);

	border-radius: 10px;
	background-color: #ffff;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	text-shadow: 2px 0 0 var(--green50), -2px 0 0 var(--green50),
		0 2px 0 var(--green50), 0 -2px 0 var(--green50), 1px 1px var(--green50),
		-1px -1px 0 var(--green50), 1px -1px 0 var(--green50),
		-1px 1px 0 var(--green50);

	img {
		width: 100px;
		height: auto;
		-webkit-animation: shake-vertical 4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
		animation: shake-vertical 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
	}
	@media (max-width: 800px) {
		span {
			display: none;
		}
	}

	@media (max-width: 600px) {
		& {
			width: 100%;
			margin: 0 auto;
			justify-content: space-around;
		}
	}

	@-webkit-keyframes shake-vertical {
		0%,
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		10%,
		30%,
		50%,
		70% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
		20%,
		40%,
		60% {
			-webkit-transform: translateY(8px);
			transform: translateY(8px);
		}
		80% {
			-webkit-transform: translateY(6.4px);
			transform: translateY(6.4px);
		}
		90% {
			-webkit-transform: translateY(-6.4px);
			transform: translateY(-6.4px);
		}
	}
	@keyframes shake-vertical {
		0%,
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		10%,
		30%,
		50%,
		70% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
		20%,
		40%,
		60% {
			-webkit-transform: translateY(8px);
			transform: translateY(8px);
		}
		80% {
			-webkit-transform: translateY(6.4px);
			transform: translateY(6.4px);
		}
		90% {
			-webkit-transform: translateY(-6.4px);
			transform: translateY(-6.4px);
		}
	}
`;

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

export const StyledHeader = styled.div`
	color: black;
	display: flex;
	gap: 10px;

	@media (max-width: 600px) {
		width: 100%;
		justify-content: space-between;
	}

	div {
		height: 90px;
		width: 90px;
		color: var(--green50);

		background-color: white;
		border: 2px solid var(--green50);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		cursor: pointer;

		p {
			color: #000;
			font-weight: bold;
			font-family: "Salsa", cursive;
		}

		&:hover {
			background-color: var(--green50);
			border: 2px solid var(--grey100);
			color: white;

			p {
				color: white;
			}
		}
	}
`;
