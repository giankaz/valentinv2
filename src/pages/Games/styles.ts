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
}

section {
    width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
`