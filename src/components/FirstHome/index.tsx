import dino from "../../assets/dinologo.png";

import val1 from "../../assets/val1.png";
import val2 from "../../assets/val2.png";
import val3 from "../../assets/val3.png";
import val4 from "../../assets/val4.png";
import val5 from "../../assets/val5.png";
import {
	StyledContainer,
	StyledDiv, StyledMain,
} from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";

import { useEffect } from "react";

import LoadingComponent from "../Global/Loading";
import Header from "../Global/Header";
import Logo from "../Global/Logo";
import CarrouselComponent from "../Carrousel";


declare global {
	interface Window {
		usePreloadImagesData: HTMLImageElement[];
	}
}

export default function FirstHome() {
	const [isLoading, setIsLoading] = useState(true);

	const [flipperImages, setFlipperImages] = useState([
		val1,
		val2,
		val3,
		val4,
		val5,
	]);


 	useEffect(() => {

		setTimeout(() => {
			setIsLoading(false);
		}, 2000);	

	}, []); 

	return (
		<StyledDiv>
			<StyledMain>
				<StyledContainer>
					<header>
						<Logo/>
						<Header/>
					</header>
					<CarrouselComponent autoPlay>
					{flipperImages.map((src: any, i:number) => {
							return <img className="flipper_image" src={src} alt=""key={i} />;
						})}
					</CarrouselComponent>
				</StyledContainer>
			</StyledMain>

			{isLoading && (
		
			<LoadingComponent/>
			)}

			<div className="opacity"></div>
		</StyledDiv>
	);
}
