import styled from "styled-components";
import bg from "../../assets/headerimg.jpg";

export const StyledFooter = styled.footer`
	width: 100%;
	height: 50vh;

	background: url(${bg});
	background-size: auto;

	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	p {
		background-color: white;
		padding: 20px;
		font-weight: bold;
		border-radius: 8px;
		border: 2px solid black;
		margin-bottom: 10px;
		margin-right: 10px;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;

		a:hover {
			color: var(--green50);
		}
	}

	@media (max-width: 600px) {
		p {
			padding: 10px;
		}
	}
`;
