import styled from "styled-components";

export const StyledMain = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
    gap: 20px;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    color: black;
    text-shadow: var(--textShadowWhite);


   img {
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
   }
    h1 {
        font-size: 40px;

    }

    h2 {
        font-size: 30px;
    }
`;
