import { LazyLoadImage } from "react-lazy-load-image-component";
import dino from "../../assets/dinologo.png";
import val1 from "../../assets/val1.jpg";
import val2 from "../../assets/val2.jpg";
import val3 from "../../assets/val3.jpg";
import val4 from "../../assets/val4.jpg";
import val5 from "../../assets/val5.jpg";
import {
	StyledContainer,
	StyledDiv,
	StyledHeader,
	StyledLoading,
	StyledMain,
	StyledTitle,
} from "./styles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";

import { AiFillPicture, AiFillInstagram } from "react-icons/ai";

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

	return (
		<StyledDiv>
			<StyledMain>
				<StyledContainer>
					<header>
						<StyledTitle>
							Valentin <span>Cabral Rossi</span>{" "}
							<img src={dino} alt="dino"></img>
						</StyledTitle>
						<StyledHeader>
							<div>
								<AiFillInstagram size={40} />
								<p>Instagram</p>
							</div>
							<div>
								<AiFillPicture size={40} />
								<p>Galeria</p>
							</div>
						</StyledHeader>
					</header>
					<Carousel
						infiniteLoop
						interval={5000}
						autoPlay
						autoFocus
						dynamicHeight
						showStatus={false}
						className="slider"
					>
						{flipperImages.map((src) => {
							return (
								<LazyLoadImage
									className="flipper_image"
									src={src}
									alt=""
									onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
								/>
							);
						})}
					</Carousel>
				</StyledContainer>
			</StyledMain>

			{isLoading && (
				<StyledLoading>
					
					<img src={dino} alt="dino"></img>
					<p>Carregando...</p>
				</StyledLoading>
			)}
		</StyledDiv>
	);
}
