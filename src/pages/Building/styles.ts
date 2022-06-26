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
    text-shadow: var(--textShadowWhite);

}

img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
}
`