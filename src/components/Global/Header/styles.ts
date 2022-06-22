import styled from "styled-components";

export const StyledHeader = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	gap: 10px;

	section {
		display: flex;
		gap: 10px;
	}

	div {
		height: 45px;
		width: 45px;
		color: var(--green50);
		position: relative;
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
			color: black;
			background-color: white;
			padding: 5px;
			position: absolute;
			bottom: -20px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;
			display: none;
			border: 1px solid black;
			border-radius: 6px;
			width: max-content;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 5px;

			span {
				font-size: 10px;
			}
		}

		&:hover {
			background-color: var(--green50);
			border: 2px solid var(--grey100);
			color: black;

			p {
				display: flex;
			}
		}
	}

	@media (max-width: 600px) {
		width: 100%;
		flex-direction: row;
		justify-content: center;
		gap: 20px;

		section {
			gap: 25px;
		}

		div {
			width: 60px;
			height: 60px;

			p {
				display: flex;
				border: 2px solid var(--green50);
				bottom: -40px;
				min-width: 70px;

				font-weight: bold;

				span {
					display: none;
				}
			}
		}
	}
`;
