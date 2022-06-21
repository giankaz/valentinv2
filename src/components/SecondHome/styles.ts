import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
max-width: 800px;
margin: 400px auto;
height: 600px;
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
    margin: 150px auto;
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
            transform: translateX(-50%);
        }
    }

    @media (max-width: 600px) {
       
    }
`