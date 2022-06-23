import dino from "../../../assets/dinologo.png";
import { StyledTitle } from "./styles";

interface LogoProps {
	title?: boolean;
	onClick?: () => void;
}

export default function Logo({ title, onClick }: LogoProps) {

	
	return (
		<StyledTitle onClick={onClick} >
			{title ? (
				<>
					Voltar a Home <img src={dino} alt="dino"></img>
				</>
			) : (
				<>
					Valentin <span>Cabral Rossi</span> <img src={dino} alt="dino"></img>
				</>
			)}
		</StyledTitle>
	);
}
