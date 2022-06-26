import { useState } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { StyledLi } from "./styles";

interface GalleryFolderProps {
	payload: {
		treatedWord: string;
		data: string;
	
	}
}

export default function GalleryFolder({ payload }: GalleryFolderProps) {
	const [hover, setHover] = useState(false)
	const history = useHistory()

	const handleClick = () => {
		history.push(`/galeria/${payload.data}`)
	}
	return (
		<StyledLi onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			{hover ? <FcOpenedFolder /> : <FcFolder />}
			<p>{payload.treatedWord}</p>
		</StyledLi>
	);
}
