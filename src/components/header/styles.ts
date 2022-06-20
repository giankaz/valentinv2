import styled from "styled-components";
import bg from "../../assets/headerimg1.jpg";
import val from "../../assets/val1.jpg";
import cloud from '../../assets/cloud.png'
export const StyledDiv = styled.div`
	width: 100%;
	height: 70vh;
	background: url(${bg});
	background-size: auto;
	position: relative;
	padding: 10px 20px;
    border-bottom: 2px solid yellow;
    display: flex;
   
`;

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 1050px;
	margin: 0 auto;
	background: url(${val}) center;
	background-size: cover;
	position: absolute;
	border: 4px solid #565656;
	border-radius: 5px;
	bottom: -130px;
	left: 50%;
	transform: translateX(-50%);
	height: 500px;

    &:hover {
        
    }

	nav {
		display: flex;
		gap: 20px;
		position: absolute;
		bottom: -40px;
		width: 100%;
		justify-content: center;
	}
`;

export const StyledTitle = styled.h1`
	font-size: 36px;
	color: black;
    font-family: 'Pacifico', cursive;
    z-index: 10;
    position: relative;
    background: url(${cloud}) no-repeat center;
	background-size: cover;
    height: 100px;
    width: 310px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;

    img {
        width: 100px;
    }
    
`;

export const StyledCircle = styled.div`
	background-color: white;
	border: 2px solid #565656;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: red;
		border: 2px solid #565656;

       
	}

	div {
		background-color: #565656;
		width: 12px;
		height: 12px;
		border-radius: 100%;
	}
`;
