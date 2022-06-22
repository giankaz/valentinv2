import { useState } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { StyledLi } from "./styles";

interface GalleryFolderProps {
	payload: {
		description: string;
		path: string
	};
}

export default function GalleryFolder({ payload }: GalleryFolderProps) {
	const [hover, setHover] = useState(false)
	const history = useHistory()

	const handleClick = () => {
		history.push(`/galeria/${payload.path}`)
	}
	return (
		<StyledLi onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			{hover ? <FcOpenedFolder /> : <FcFolder />}
			<p>{payload.description}</p>
		</StyledLi>
	);
}
