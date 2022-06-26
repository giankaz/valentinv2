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
    text-shadow:var(--textShadowWhite)
}


&:hover {
	p {
		color: white;
	    text-shadow: var(--textShadowBlack);
	}
}
`