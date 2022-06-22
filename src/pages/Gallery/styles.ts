import styled from "styled-components";

export const StyledMain = styled.main`
width: 100%;
padding-bottom: 20px;


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


    .gallery_return {
            background-color: white;
			border-radius: 100%;
			width: 60px;
			height: 60px;
			color: var(--green50);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid  var(--green50);

			svg {
				padding-right: 4px;
				padding-bottom: 3px;
			}

			cursor: pointer;

			&:hover {
				border: 2px solid black;
				color: black;
			}

        @media (max-width: 600px) {
            position: fixed;
            bottom: 20px;
            left: 20px;
        }
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