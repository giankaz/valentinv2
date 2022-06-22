import styled from "styled-components";

export const StyledMain = styled.main`
	width: 100%;
	background-color: var(--grey100);

	display: flex;
	justify-content: center;
	align-items: center;

	section {
		display: flex;
		position: fixed;
		z-index: 100;
		left: 20px;
		bottom: 20px;
		gap: 10px;

		.gallery_return {
			background-color: white;
			border-radius: 100%;
			width: 60px;
			height: 60px;
			color: black;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid black;

			svg {
				padding-right: 4px;
				padding-bottom: 3px;
			}

			cursor: pointer;

			&:hover {
				border: 2px solid var(--green50);
				color: var(--green50);
			}
		}
	}

	button {
		border: 2px solid black;
	}

	button:hover {
		border: 2px solid var(--green50);
		color: var(--green50);
	}
`;

export const StyledUl = styled.ul`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	gap: 10px;

	img {
		width: calc((100% - 30px) / 3);
		height: auto;
		border: 2px solid transparent;
		cursor: pointer;
	}

	img:hover {
		border: 2px solid white;

	}

	.down_img {
		width: calc((100% - 30px) / 2);
		flex: 1;
		justify-content: stretch;
		align-items: stretch;
	}
`;

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: rgba(0, 0, 0, 0.75);
	animation: fadein 0.5s both;

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	img {
		height: 100vh;
		width: auto;
	}

	div {
		position: relative;
	}
	button {
		position: absolute;
		border: none;
		background-color: transparent;
		color: rgba(215, 224, 218, 0.92);
		cursor: pointer;
		transition: 0.5s;
	}
	.gallery_close {
		background-color: white;
		border: 2px solid black;
		border-radius: 100%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		color: black;
		right: 10px;
		top: 15px;
		z-index: 10;
	}

	.gallery_right {
		height: 100vh;
		right: -50px;
	}
	.gallery_left {
		height: 100vh;
		left: -50px;
	}

	.gallery_right:hover,
	.gallery_left:hover {
		border: none;
		background-color: rgba(106, 106, 106, 0.27);
	}
	@media (max-width: 1020px) {
		button {
			position: fixed;
		}
		.gallery_left {
			position: fixed;
			left: 0;
		}
		.gallery_right {
			position: fixed;
			right: 0;
		}
	}
`;
