import styled, { css } from "styled-components";
import msgbox from "../../../assets/messagebox.png";
import nightsky from '../../../assets/nightskybg.jpg'
import skybg from '../../../assets/skybg.webp'
import ground from '../../../assets/newground.png'

interface MainProps {
	jump: boolean;
	goDown: boolean;
	stopGround: boolean;
	gameStarted: boolean;
	cactusFade: boolean;
	cactusDisplayNone: boolean;
	entrance: boolean;
	night: boolean;
}

export const StyledMain = styled.main<MainProps>`

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	

	filter: brightness(${props => props.night ? '70%' : '100%'});

	.background {
			position: fixed;
			width: 100%;
		height: calc(100vh + 200px);
		background: url(${props => props.night ? nightsky :skybg})
			0 0 repeat;
		background-size: contain;
		animation: right-walk 40s infinite;
		animation-timing-function: linear;
		transition: 1.2s;
		z-index: -200;
		filter: brightness(${props => props.night ? '100%' : '90%'});
	}

	@keyframes right-walk {
		100% {
			background-position: -6000px;
		}
	}

	.msg_box {
		left: 50%;
		top: 40px;
		transform: translateX(-50%);
		width: 80%;
		height: 200px;
		position: fixed;
		background-image: url(${msgbox});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		font-family: "VT323", monospace;
		font-size: 60px;
		z-index: 1;
		animation: fadein 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
		p {
			font-family: "VT323", monospace;
		}
		input {
			width: 100px;
			font-size: 35px;
			font-weight: bold;
			text-align: center;
			background-color: transparent;
			border: none;
			border-bottom: 2px solid black;
			font-family: "VT323", monospace;
		}
		input:focus {
			outline: none;
		}
		@media (max-width: 650px) {
			top: 25%;
		}

		@keyframes fadein {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
.score {
	position: absolute;
	${props => props.night ? css`right: 20px;` : css` left: 20px;` }
	top: 10px;
	
	font-family: "VT323", monospace;
	font-size: 60px;
	transition: 0.5;
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: ${props => props.night ? 'white' : 'black'}
}

.right_answer {
	position: fixed;
	z-index: 300;
	font-size: 80px;
	top: 30%;
	left: 50%;
	transform: translate(-50% -50%);
	text-shadow: var(--textShadowWhite);
}

.start {
	position: fixed;
	width: 400px;
	height: 200px;
	top: 20%;
	left: 50%;
	gap: 15px;
	transform: translateX(-50%);
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${msgbox});
		background-repeat: no-repeat;
		background-size: contain;

		p {
			font-family: "VT323", monospace;
			font-size: 25px;
		}

		button {
			cursor: pointer;
			border: 2px solid black;
			border-radius: 8px;
			font-family: "VT323", monospace;
			font-size: 35px;
			padding: 5px 20px;
			background-color: var(--green100);
			&:hover {
				background-color: red;

			}
		}
}
	section {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200px;
		transition: 0.5s;

		.dino {
			width: 200px;
			position: absolute;
			left: ${(props) => {
				if (props.jump) {
					return "300px";
				}
				if (props.goDown) {
					return "300px";
				}
				return "20px";
			}};
			bottom: ${(props) => {
				if (props.jump) {
					return "400px";
				}
				if (props.goDown) {
					return "80px";
				}
				return "95px";
			}};
			animation: shake-vertical 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
				infinite both;
			transition: 1s;
			z-index: 105;
		}

		.shadow {
			position: absolute;
			bottom: 95px;
			left: ${(props) => {
				if (props.jump) {
					return "350px";
				}
				if (props.goDown) {
					return "350px";
				}
				return "50px";
			}};
			height: 20px;
			background-color: rgba(0, 0, 0, 0.51);
			z-index: 102;
			transition: 1s;
			border-radius: 100%;
			animation: incdec 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
		}

		@media (max-width: 550px) {
			.dino {
			    width: 150px;

				left: ${(props) => {
					if (props.jump) {
						return "200px";
					}
					if (props.goDown) {
						return "200px";
					}
					return "20px";
				}};
			}

			.shadow {
				left: ${(props) => {
					if (props.jump) {
						return "250px";
					}
					if (props.goDown) {
						return "250px";
					}
					return "50px";
				}};
			}
		}

		@media (max-height: 600px) {
			.dino {

				left: ${(props) => {
					if (props.jump) {
						return "200px";
					}
					if (props.goDown) {
						return "200px";
					}
					return "20px";
				}};
			}

			.shadow {
				left: ${(props) => {
					if (props.jump) {
						return "250px";
					}
					if (props.goDown) {
						return "250px";
					}
					return "40px";
				}};

			
		
			}
		}	

	}



	@keyframes incdec {
		0% {
			width: 90px;
		}
		25% {
			width: 100px;
		}
		50% {
			width: 90px;
		}
		100% {
			width: 100px;
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

	.sun {
		width: 20%;
		min-width: 250px;
		position: fixed;
		top: 0;
		right: 0;
		z-index: -40;
		transition: 0.5;
		animation: come-right-sky 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);

@keyframes come-right-sky {
	0% {
		-webkit-transform: translateX(500px);
		transform: translateX(500px);
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
	}

	.moon {
		width: 20%;
		min-width: 250px;
		top: 0;
		left: 0;
		filter: brightness(100%);
		position: fixed;
		z-index: -40;
		transition: 0.5;
		animation: come-left-sky 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);

	}

	@keyframes come-left-sky {
	0% {
		-webkit-transform: translateX(-500px);
		transform: translateX(-500px);
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
	.cactus {
		display: ${(props) => (props.cactusDisplayNone ? "block" : "none")};
		width: 150px;
		position: absolute;
		right: ${(props) => (props.cactusFade ? "110vw" : "40%")};
		transition: 2s;
		bottom: 105px;
		animation: ${(props) => {
			if (props.entrance) {
				return "come-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
			}
		}};
		z-index: 104;
	}
	.cactus_shadow {
		display: ${(props) => (props.cactusDisplayNone ? "block" : "none")};
		position: absolute;
		width: 140px;
		bottom: 100px;
		transition: 2s;
		right: ${(props) => (props.cactusFade ? "110vw" : "40%")};
		height: 10px;
		background-color: rgba(0, 0, 0, 0.51);
		z-index: 103;
		border-radius: 100%;
		animation: ${(props) => {
			if (props.entrance) {
				return "come-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
			}
		}};
	}

	@keyframes cactus-shadow {
		0% {
			width: 140px;
		}
		25% {
			width: 160px;
		}
		50% {
			width: 140px;
		}
		100% {
			width: 160px;
		}
	}

	@keyframes come-right {
		0% {
			-webkit-transform: translateX(1000px);
			transform: translateX(1000px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
	@keyframes shake-cactus {
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
			transform: translateY(-1px);
		}
		20%,
		40%,
		60% {
			-webkit-transform: translateY(8px);
			transform: translateY(2px);
		}
		80% {
			-webkit-transform: translateY(6.4px);
			transform: translateY(3px);
		}
		90% {
			-webkit-transform: translateY(-6.4px);
			transform: translateY(3px);
		}
	}

	@media (max-width: 700px) {
		.cactus {
			right: ${(props) => (props.cactusFade ? "110vw" : "5%")};
		}
		.cactus_shadow {
			right: ${(props) => (props.cactusFade ? "110vw" : "5%")};
		}
	}



	.ground {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 140px;
			background: url(${ground}) 0 0 repeat;
			background-size: 908px 140px;
			z-index: -1;
			transition: 0.5s;

			animation: right-walk-ground 1500s infinite;
	    	animation-play-state: ${(props) => {
			if (!props.gameStarted) {
					return "paused"
			}

			if (props.entrance) {
				return "paused"
			}
		}};
	
		}

		@keyframes right-walk-ground {
		100% {
			background-position: -900600px;
		}
	}


	.btns {
	

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		button {
			width: 100%;
			cursor: pointer;
			padding: 5px;
			background-color: var(--green100);
			font-family: "VT323", monospace;
			font-size: 20px;
			border-radius: 8px;
			border: 2px solid black;
			display: flex;
			gap: 5px;
			align-items: center;
			justify-content: space-around;
			

			&:hover {
				background-color: red;
			}
		}

		svg {
			cursor: pointer;
		}
	}
@media (max-height: 450px) and (max-width: 600px){
	section {
		bottom: -100px;
	}

	.ground {
		bottom: -100px;
	}
}
`;


