
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import mommyDb from "../../../databases/mommyDb";

import CarrouselComponent from "../../../components/Carrousel";
import { StyledContainer, StyledMain } from "./styles";

export default function GalleryGrid() {
	const [dataBase, setDatabase] = useState<string[]>([]);

	const { id } = useParams();



	useEffect(() => {
		switch (id) {
			case "barriga-da-mamae":
				break;
			case "ensaio-da-mamae":
				/* 		const newDb = mommyDb.map((item, i) => {
					return {
					 itemId: i.toString(),
					 mediaUrl: `${process.env.PUBLIC_URL}/gallery/${id}/${item}`
					}
						
				}); */
				setDatabase(mommyDb);
				break;
			case "primeiro-mes":
				break;
			case "segundo-mes":
				break;
			case "terceiro-mes":
				break;
		}
	}, []);


	
	return (
		<StyledMain>
			 		<StyledContainer>
				<CarrouselComponent className='slider'>
					{dataBase.map((src) => {
						return <img className="flipper_image" src={`${process.env.PUBLIC_URL}/gallery/${id}/${src}`} alt="" />;
					})}
				</CarrouselComponent>
			</StyledContainer> 


		</StyledMain>
	);
}
