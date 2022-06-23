import styled from "styled-components";
import bg from "../../assets/headerimg1.jpg";



export const StyledDiv = styled.div`
	width: 100%;
	height: 70vh;
	background: url(${bg});
	background-size: auto;
	border-bottom: 2px solid var(--green50);
	

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
		img {
			object-fit: cover !important;
			width: 100% !important;
			height: 100% !important;
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





