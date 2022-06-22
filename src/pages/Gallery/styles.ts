import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
padding-bottom: 20px;

background-image: linear-gradient(to bottom right, #ffffff, #82a91f,  #0a4c42, #0a4c42);

.gallery_container {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 20px;
}

header {
    width: 100%;
 
    justify-content: space-between;
    display: flex;

    h1 {
        cursor: pointer;
    }
}

ul {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 20px;
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
        gap: 15px;

        h1 {
            font-size: 30px;
          
        }
    }
}
.gallery_title {
   margin-top: 40px;
   font-size: 30px;
   text-shadow: 2px 0 0 white, -2px 0 0 white,
		0 2px 0 white, 0 -2px 0 white, 1px 1px white,
		-1px -1px 0 white, 1px -1px 0 white,
		-1px 1px 0 white;
}

`