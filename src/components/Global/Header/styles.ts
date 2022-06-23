import styled from "styled-components";

export const StyledHeader = styled.div`
	color: black;
	display: flex;
	flex-direction: row;
	gap: 20px;

	section {
		display: flex;
		gap: 20px;
		
	}

	div {
	
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
			color: black;
			background-color: white;
			padding: 5px;
			cursor: pointer;
			font-weight: bold;
		
			border: 2px solid var(--green50);
			border-radius: 6px;
			width: max-content;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			

		
		}

		a:hover {
			background-color: var(--green50);
			border: 2px solid var(--grey100);
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
