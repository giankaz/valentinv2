import styled from "styled-components";

export const StyledTitle = styled.h1`
	font-size: 30px;
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
		width: 80px;
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
			font-size: 35px;
			width: fit-content;
			gap: 70px;
			margin: 0 auto;
			justify-content: space-between;
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
