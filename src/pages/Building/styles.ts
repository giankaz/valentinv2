import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
background-image: linear-gradient(to bottom right, #ffffff, #82a91f,  #0a4c42, #0a4c42);

h1 {
    font-size: 30px;
    color: black;
    text-shadow: 2px 0 0 white, -2px 0 0 white,
		0 2px 0 white, 0 -2px 0 white, 1px 1px white,
		-1px -1px 0 white, 1px -1px 0 white,
		-1px 1px 0 white;
}

img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
}
`