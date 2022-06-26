import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
max-width: 800px;
margin: 400px auto;
height: 700px;
width: 100%;
text-align: start;
display: flex;
flex-direction: column;
gap: 30px;
box-sizing: border-box;
padding: 10px;




 @media (max-width: 720px) {
    margin: 300px auto;
    text-align: center;
}

@media (max-width: 550px) {
    margin: 250px auto;
    text-align: center;
}
@media (max-width: 450px) {
    margin: 150px auto;
    text-align: center;
} 


    h2 {
        font-size: 40px;
        font-weight: bold;
        width: 100%;
        text-shadow: var(--textShadowWhite);

    }

    p {
        font-size: 20px;
        font-weight: bold;
        text-shadow: var(--textShadowWhite);

    text-align: start;

    }

    .subtitle {
        font-size: 30px;
    }

    section {
        width: 100%;
        display: flex;
        background-color: white;
        border-radius: 10px;
        position: relative;
        align-items: flex-start;
        border: 2px solid black;
        
        

        div {
            margin-bottom: 20px;
           width: 100%;
           display: flex;
           flex-direction: column;
           gap: 10px;
        
        }

      
        .section_div:nth-child(even) {
            border-left: 2px solid black;
        }

        .section_continue {
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-43%);
        }
    }

    @media (max-width: 600px) {
       
    }
`