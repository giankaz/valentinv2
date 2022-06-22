import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
	TbArrowBack,
	TbArrowBigUpLines,
	TbArrowBigRight,
	TbArrowBigLeft,
} from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import dino from "../../../assets/dinologo.png";

import mommyDb from "../../../databases/mommyDb";

import { StyledMain, StyledModal, StyledUl } from "./styles";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../../components/Global/Loading";

type Database = {
	src: string;
	down?: boolean;
};

export default function GalleryGrid() {
	const [dataBase, setDatabase] = useState<Database[]>([]);

	const [animation, setAnimation] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [currentImg, setCurrentImg] = useState("");

	const [dots, setDots] = useState("...");

	const history = useHistory();

	const { id } = useParams();



	useEffect(() => {
		switch (id) {
			case "barriga-da-mamae":
				break;
			case "ensaio-da-mamae":
				const newDb = mommyDb.map((item, i) => {
					return {
						src: `${process.env.PUBLIC_URL}/gallery/${id}/${item.src}`,
						down: item.down ? true : false,
					};
				});
				setDatabase(newDb);

				break;
			case "primeiro-mes":
				break;
			case "segundo-mes":
				break;
			case "terceiro-mes":
				break;
		}
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
		
	
	}, []);

	useEffect(() => {
		if (animation) {
			setTimeout(() => {
				setIsLoading(false);
				setAnimation(false);
			}, 500);
		}
	}, [animation]);



	const handleBack = () => {
		history.push("/galeria");
	};

	const openImg = (src: string) => {
	
		setCurrentImg(src);
	};

	const changeCurrentImg = (type: string) => {
		const currentIndex = dataBase.findIndex((item) => item.src === currentImg)
      

        
		if (currentIndex === 0 && type !== 'next') {
			setCurrentImg(dataBase[dataBase.length -1].src)
		} else if (currentIndex === dataBase.length -1 && type === 'next') {
			setCurrentImg(dataBase[0].src)
		} else {

			if (type === "next") {
				console.log(currentImg)
				setCurrentImg(dataBase[currentIndex + 1].src);
			} else {
				setCurrentImg(dataBase[currentIndex - 1].src);
			}
		}
	};

	return (
		<StyledMain>
			<StyledUl>
				{dataBase.map((item, i) => {
					return (
						<LazyLoadImage
							key={i}
							alt=""
							className={item.down ? "down_img" : "up_img"}
							src={item.src}
							afterLoad={() => setAnimation(true)}
							onClick={() => openImg(item.src)}
						/>
					);
				})}
			</StyledUl>

			<section>
				<div onClick={handleBack} className="gallery_return">
					<TbArrowBack size={35} />
				</div>

				<ScrollToTop
					smooth
					component={<TbArrowBigUpLines size={30} />}
					style={{
						width: "60px",
						height: "60px",
						borderRadius: "100%",
						bottom: "20px",
						right: "20px",
					}}
				/>
			</section>

			{isLoading && (
				<LoadingComponent animation={animation}>
					<img src={dino} alt="dino"></img>
					<p>Carregando{dots}</p>
				</LoadingComponent>
			)}

			{currentImg !== "" && (
				<StyledModal>
					<div>
						<LazyLoadImage alt="" src={currentImg} />
						<button onClick={() => setCurrentImg("")} className="gallery_close">
							<IoMdClose size={20} />
						</button>
						<button
							className="gallery_left"
							onClick={() => changeCurrentImg("prev")}
						>
							<TbArrowBigLeft size={40} />
						</button>
						<button
							className="gallery_right"
							onClick={() => changeCurrentImg("next")}
						>
							<TbArrowBigRight size={40} />
						</button>
					</div>
				</StyledModal>
			)}
		</StyledMain>
	);
}
