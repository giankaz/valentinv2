import { useHistory } from "react-router-dom";
import { StyledContainer } from "./styles";

interface CardProps {
	title: string;
	imgSRC: string;
	description: string;
	path: string;
}

export default function Card({ description, imgSRC, title, path }: CardProps) {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/${path}`);
	};

	return (
		<StyledContainer onClick={handleClick}>
			<h2>{title}</h2>
			<img src={imgSRC} alt="" />
			<p>{description}</p>
		</StyledContainer>
	);
}
