import styled from "styled-components";

export const StyledLi = styled.li`
width: calc((100% - 40px) / 3);

@media (max-width: 650px) {
	width: calc((100% - 20px) / 2);
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

`