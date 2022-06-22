import { StyledFooter } from "./styles";
import {BsLinkedin} from 'react-icons/bs'


export default function Footer() {
  return (
    <StyledFooter>
      <p>Feito por Giancarlo Rossi   <a href="https://www.linkedin.com/in/giankaz/"><BsLinkedin size={30}/></a></p>
    </StyledFooter>
  )
}
