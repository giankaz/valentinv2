import styled from "styled-components";

export const StyledMain = styled.main`
max-width: 1050px;
width: 100%;
margin: 0 auto;

display: flex;
flex-direction: column;
gap: 50px;
padding-top: 20px;

header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
    justify-content: center;
      div {
        width: fit-content;
      }
      }

    .gallery_return {
      cursor: pointer;
      background-color: white;
      padding: 12px;
      border: 2px solid var(--green50);
      color: var(--green50);
      border-radius: 100%;

      &:hover {
        border: 2px solid black;
        color: black;
      }

      @media (max-width: 600px) {
        position: fixed;
        left: 10px;
        bottom: 10px;
      }
    }
}

section {
    width: 100%;
  ul {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;
  }
}
`