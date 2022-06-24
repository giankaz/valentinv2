import styled from "styled-components";

export const StyledHeader = styled.div`
	color: black;
	display: flex;
	flex-direction: row;
	gap: 10px;

	section {
		display: flex;
		gap: 10px;
		
	}

	div {
		width: 75px;
		color: var(--green50);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;

		a {
			border: 2px solid var(--green50);
			border-radius: 10px;
			cursor: pointer;
			background-color: white;
			height: 45px;
		width: 45px;
		}

		p {
			width: 100%;
			color: black;
			background-color: white;
			padding: 5px;
			cursor: pointer;
			font-weight: bold;
			font-size: 13.5px;
		
			border: 2px solid var(--green50);
			border-radius: 6px;
		
			flex-direction: column;
			justify-content: center;
			align-items: center;
			

		
		}

		a:hover {
			background-color: var(--green50);
			border: 2px solid black;
			color: black;

	
		}

		a:hover ~ p {
			background-color: var(--green50);
			border: 2px solid black;

		}

		p:hover {
			background-color: var(--green50);
			border: 2px solid black;
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
