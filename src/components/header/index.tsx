import {
	StyledCircle,
	StyledContainer,
	StyledDiv,
	StyledTitle,
} from "./styles";
import dino from '../../assets/dinologo.png'

export default function Background() {
	return (
		<StyledDiv>
			<StyledTitle>Valentin <img src={dino} alt='dino'></img></StyledTitle>
			<StyledContainer>
				<nav>
					<StyledCircle>
                        <div></div>
                    </StyledCircle>
					<StyledCircle />
					<StyledCircle />
					<StyledCircle />
				</nav>

			</StyledContainer>
		</StyledDiv>
	);
}
