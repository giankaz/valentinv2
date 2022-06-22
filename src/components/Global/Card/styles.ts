import styled from "styled-components";



export const StyledContainer = styled.div`
width: calc((100% - 20px) / 2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-bottom: 2px solid black;
padding: 20px;
cursor: pointer;

h2 {
    margin-bottom: 20px;
    font-size: 25px;
}

&:hover {
    filter: brightness(110%);

    p, h2 {
        color: var(--green50)
    }
   
}

img {
    border-radius: 10px;
    width: 100%;
}


@media (max-width: 600px) {
     p {
        text-align: center;
        font-size: 20px;
     }

     h2 {
        font-size: 25px;
     }
    }
`