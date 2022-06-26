import styled from "styled-components";

export const StyledLi = styled.li`
width: calc((100% - 100px) / 6);

@media (max-width: 650px) {
	width: calc((100% - 40px) / 3);
}

cursor: pointer;



svg {
	width: 100%;
	height: auto;
}

p {
    font-size: 20px;
    text-shadow: 2px 0 0 white, -2px 0 0 white,
		0 2px 0 white, 0 -2px 0 white, 1px 1px white,
		-1px -1px 0 white, 1px -1px 0 white,
		-1px 1px 0 white;
}


&:hover {
	p {
		color: white;
	    text-shadow: 2px 0 0 black, -2px 0 0 black,
		0 2px 0 black, 0 -2px 0 black, 1px 1px black,
		-1px -1px 0 black, 1px -1px 0 black,
		-1px 1px 0 black;	
	}
}
`