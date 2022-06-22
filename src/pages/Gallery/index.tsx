import { useEffect, useState } from "react";
import dino from "../../assets/dinologo.png";
import { useHistory } from "react-router-dom";
import Header from "../../components/Global/Header";
import LoadingComponent from "../../components/Global/Loading";
import Logo from "../../components/Global/Logo";
import { StyledMain } from "./styles";
import GalleryFolder from "../../components/Global/GalleryFolder";


export default function Gallery() {
	const [dots, setDots] = useState("...");
	const [isLoading, setIsLoading] = useState(true);
	const [animation, setAnimation] = useState(false);
	const [folders, setFolders] = useState([
		{description:"1º Mês", path: 'primeiro-mes'},
		{description:"2º Mês", path: 'segundo-mes'},
	/* 	{description:"3º Mês", path: 'terceiro-mes'}, */
		{description:"Ensaio da Mamãe", path: 'ensaio-da-mamae'},
		{description:"Na Barriga da Mamãe", path: 'barriga-da-mamae'}



		
	
	])

	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};

	useEffect(() => {
		setInterval(() => {
			switch (dots) {
				case "...":
					setDots(".");
					break;
				case "..":
					setDots("...");
					break;
				case ".":
					setDots("..");
					break;
			}
		}, 150);
		setTimeout(() => setAnimation(true), 1000);
		setTimeout(() => {
			setIsLoading(false);
			setAnimation(false);
		}, 1500);
	});

	return (
		<StyledMain>
			<section className="gallery_container">
				<header>
					<Logo title onClick={handleClick} />
					<Header />
				</header>
				<h1 className="gallery_title">Galeria de Fotos</h1>
				<ul>
				 {folders.map((folder, i) => <GalleryFolder key={i} payload={folder}/>)}
				</ul>
			</section>

			{isLoading && (
				<LoadingComponent animation={animation}>
					<img src={dino} alt="dino"></img>
					<p>Carregando{dots}</p>
				</LoadingComponent>
			)}
		</StyledMain>
	);
}
