import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
max-width: 800px;
margin: 400px auto;
height: 400px;
width: 100%;
text-align: start;
display: flex;
flex-direction: column;
gap: 30px;
box-sizing: border-box;
padding: 10px;

@media (max-width: 550px) {
    margin: 250px auto;
    text-align: center;
}

@media (max-width: 400px) {
    margin: 200px auto;
}

    h2 {
        font-size: 40px;
        font-weight: bold;
        width: 100%;
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff,
		0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff,
		-1px -1px 0 #fff, 1px -1px 0 #fff,
		-1px 1px 0 #fff;
    }

    p {
        font-size: 20px;
        font-weight: bold;
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff,
		0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff,
		-1px -1px 0 #fff, 1px -1px 0 #fff,
		-1px 1px 0 #fff;
    text-align: start;

    }
`