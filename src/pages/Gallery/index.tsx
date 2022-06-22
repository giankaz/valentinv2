import { useEffect, useState } from "react";
import {
	TbArrowBack
} from "react-icons/tb";
import { useHistory } from "react-router-dom";
import dino from "../../assets/dinologo.png";
import dots from "../../assets/dots.gif";
import GalleryFolder from "../../components/Global/GalleryFolder";
import Header from "../../components/Global/Header";
import LoadingComponent from "../../components/Global/Loading";
import { StyledMain } from "./styles";

export default function Gallery() {
	const [isLoading, setIsLoading] = useState(true);
	const [animation, setAnimation] = useState(false);
	const [folders, setFolders] = useState([
		{ description: "1º Mês", path: "primeiro-mes" },
		{ description: "2º Mês", path: "segundo-mes" },
		/* 	{description:"3º Mês", path: 'terceiro-mes'}, */
		{ description: "Ensaio da Mamãe", path: "ensaio-da-mamae" },
		{ description: "Na Barriga da Mamãe", path: "barriga-da-mamae" },
	]);

	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};

	useEffect(() => {
		setTimeout(() => setAnimation(true), 1000);
		setTimeout(() => {
			setIsLoading(false);
			setAnimation(false);
		}, 1500);
	});

	const handleBack = () => {
		history.push("/");
	};

	return (
		<StyledMain>
			<section className="gallery_container">
				<header>
					<div onClick={handleBack} className="gallery_return">
						<TbArrowBack size={35} />
					</div>
					<Header />
				</header>
				<h1 className="gallery_title">Galeria de Fotos</h1>
				<ul>
					{folders.map((folder, i) => (
						<GalleryFolder key={i} payload={folder} />
					))}
				</ul>
			</section>

			{isLoading && (
				<LoadingComponent animation={animation}>
					<img src={dino} alt="dino"></img>
					<p>
						Carregando
						<img src={dots} alt="" />{" "}
					</p>
				</LoadingComponent>
			)}
		</StyledMain>
	);
}
