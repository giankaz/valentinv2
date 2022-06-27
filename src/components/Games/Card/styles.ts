import styled from "styled-components";
import skybg from '../../../assets/skybg.jpg'
import ground from '../../../assets/ground.png'

interface DivProps {
	bgImage?: string;
}

export const StyledDiv = styled.div<DivProps>`
	width: 100%;
	max-width: 350px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 20px;
	background: url(${skybg}) 0 0 repeat;
	background-size: contain;
	animation: right-walk 120s infinite;
	animation-timing-function: linear;
	border-radius: 10px;
	border: 2px solid white;
	z-index: 0;
	cursor: pointer;


	.floor {
		width: 100%;
		position: absolute;
		z-index: 0;
		bottom: 0;
		height: 50%;
		background-image: url(${ground});
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 8px;
	}

	@keyframes right-walk {
		100% {
			background-position: 6000px;
		}
	}

	h1 {
		font-size: 30px;
		color: black;
		text-shadow: var(--textShadowWhite);
		z-index: 1;
	}

	img {
		width: 90%;
		max-width: 300px;
		height: auto;
		-webkit-animation: shake-vertical 4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
		animation: shake-vertical 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
			infinite both;
		z-index: 1;

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

	&:hover {
		border: 2px solid red;
		h1 {
			color: red;
		}

		img {
			-webkit-filter: drop-shadow(3px 3px 0 red)
				drop-shadow(-3px -3px 0 red);
			filter: drop-shadow(3px 3px 0 red) drop-shadow(-3px -3px 0 red);
		}
	}
`;
