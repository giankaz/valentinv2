import styled, { css } from "styled-components";

export const StyledMain = styled.main`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;

	.loading_gallery {
		color: white;
		font-size: 20px;
	}

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

	.dots {
		width: 100px;
	}
`;

export const StyledUl = styled.ul`
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-flow: row wrap;
	gap: 10px;

	li {
		height: 45vh;
		flex-grow: 1;
	}

	@media (max-width: 600px) {
		li {

			height: 20vh;
		}
	}

	img {
		max-height: 100%;
		min-width: 100%;
		object-fit: cover;
		vertical-align: bottom;

		border: 2px solid transparent;
		cursor: pointer;
	}

	img:hover {
		border: 2px solid white;
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
	align-items: center;
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

	.test {
		animation: fadein 0.5s both;
	}

	img {
		height: auto;
		width: 100%;
		max-height: 100vh;
	}

	div {
		position: relative;
	}
	button {
		border: none;
		background-color: transparent;
		color: rgba(215, 224, 218, 0.92);
		cursor: pointer;
		transition: 0.5s;
	}
	.gallery_close {
		position: absolute;
		color: white;
		border-radius: 100%;
		width: 60px;
		height: 60px;
		cursor: pointer;
		
		right: 0px;
		top: 0;
		z-index: 10;
	}

	.gallery_close:hover {
		border: none;
	}

	@media (max-width: 1020px) {
		div {
			position: static;
		}
		button {
			position: fixed;
		}
	}
`;

interface ArrowProps {
	left?: boolean;
	right?: boolean;
	leftClick?: boolean;
	rightClick?: boolean;
}

export const StyledArrow = styled.button<ArrowProps>`
	position: fixed;
	border: none !important;
	height: 100vh;
	top: 0;
	${(props) =>
		props.left
			? css`
					left: 0;
			  `
			: css`
					right: 0;
			  `};

	&:nth-child(odd) {
		background-color: ${(props) =>
			props.leftClick && "rgba(106, 106, 106, 0.27)"};
	}
	&:nth-child(even) {
		background-color: ${(props) =>
			props.rightClick && "rgba(106, 106, 106, 0.27)"};
	}

	&:hover {
		border: none;
		background-color: rgba(106, 106, 106, 0.27);
	}
`;
