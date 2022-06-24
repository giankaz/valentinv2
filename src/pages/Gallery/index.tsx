import { useEffect, useState } from "react";
import {
	TbArrowBack
} from "react-icons/tb";
import { useHistory } from "react-router-dom";
import GalleryFolder from "../../components/Global/GalleryFolder";
import Header from "../../components/Global/Header";
import LoadingComponent from "../../components/Global/Loading";
import { StyledMain } from "./styles";

export default function Gallery() {
	const [isLoading, setIsLoading] = useState(true);
	const [folders, setFolders] = useState([
		{ description: "1º Mês", path: "primeiro-mes" },
		{ description: "2º Mês", path: "segundo-mes" },
		/* 	{description:"3º Mês", path: 'terceiro-mes'}, */
		{ description: "Ensaio da Mamãe", path: "ensaio-da-mamae" },
		{ description: "Na Barriga da Mamãe", path: "barriga-da-mamae" },
	]);

	const history = useHistory();


	useEffect(() => {

		setTimeout(() => {
			setIsLoading(false);
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
				<LoadingComponent />
			)}
		</StyledMain>
	);
}
