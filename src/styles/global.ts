import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-family: "Salsa", cursive;
	vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  

  background: linear-gradient(to bottom right, #ffffff, #82a91f,  #0a4c42, #0a4c42) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

body {
	line-height: 1;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
	--grey100: #565656;	
  --textShadowWhite: 2px 0 0 white, -2px 0 0 white,
		0 2px 0 white, 0 -2px 0 white, 1px 1px white,
		-1px -1px 0 white, 1px -1px 0 white,
		-1px 1px 0 white;
    --textShadowBlack: 2px 0 0 black, -2px 0 0 black,
		0 2px 0 black, 0 -2px 0 black, 1px 1px black,
		-1px -1px 0 black, 1px -1px 0 black,
		-1px 1px 0 white;
	--green50: #92b811;
	--green100: #9ad5ad;
}
#scrollToTop:hover {
  border: 2px solid var(--green50) !important;
		color: var(--green50);
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--green50) black;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: black;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--green50);
    border-radius: 10px;
    border: 3px solid black;
  }


  a {
   
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;
