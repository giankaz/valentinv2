import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TbArrowBack, TbArrowBigUpLines } from "react-icons/tb";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import dino from "../../../assets/dinologo.png";
import dots from "../../../assets/dots.gif";
import { StyledArrow, StyledMain, StyledModal, StyledUl } from "./styles";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../../components/Global/Loading";
import { defineSwipe, Swipeable } from "react-touch";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBokxAhCwSbXRnehbdC6z7JlYNwBPXVVuU",
	authDomain: "site-valentin.firebaseapp.com",
	projectId: "site-valentin",
	storageBucket: "site-valentin.appspot.com",
	messagingSenderId: "302720444451",
	appId: "1:302720444451:web:eb81039d3e1f54295a2996",
};

const firebaseApp = initializeApp(firebaseConfig);

export default function GalleryGrid() {
	const [dataBase, setDatabase] = useState<any>([]);

	const [animation, setAnimation] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [currentImg, setCurrentImg] = useState("");

	const [keyDownAnimation, setKeyDownAnimation] = useState({
		left: false,
		right: false
	})

	const history = useHistory();

	const swipe = defineSwipe({ swipeDistance: 50 });

	const { id } = useParams();

	const storage = getStorage(firebaseApp);
	const storageRef = ref(
		storage,
		`gs://site-valentin.appspot.com/images/${id}`
	);

	
	const changeCurrentImg = (type: string) => {
		const currentIndex = dataBase.findIndex((item: any) => item === currentImg);
      

		if (currentIndex === 0 && type !== "next") {
			setCurrentImg(dataBase[dataBase.length - 1]);
		} else if (currentIndex === dataBase.length - 1 && type === "next") {
			setCurrentImg(dataBase[0]);
		} else {
			if (type === "next") {
				setCurrentImg(dataBase[currentIndex + 1]);
			} else {
				setCurrentImg(dataBase[currentIndex - 1]);
			}
		}
	};

	const onKeyDown = (e: any) => {
		console.log(currentImg)
		if (e.key === 'ArrowRight' || e.key === 'd') {
			changeCurrentImg("next")
			setKeyDownAnimation({left: false, right: true})
			setTimeout(() => {
			setKeyDownAnimation({left: false, right: false})
			}, 100)
		}
		if (e.key === 'ArrowLeft' || e.key === 'a') {
			changeCurrentImg("prev")
			setKeyDownAnimation({right: false, left: true})
			setTimeout(() => {
			setKeyDownAnimation({right: false, left: false})
			}, 150)
		}
		if (e.key === 'Escape') {
			setCurrentImg('')
		}

	}
	useEffect(() => {
		document.body.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.removeEventListener('keydown', onKeyDown);
		}
	}, [currentImg])


	useEffect(() => {
		const srcArray: any = [];

		const getItem = async () => {
			const list = await listAll(storageRef);

			const listArray = await list.items;

			await listArray;

			listArray.forEach(async (listItem) => {
				const data = await getDownloadURL(listItem);

				await data;

				srcArray.push(data);
			});
		};
		getItem();

		setTimeout(() => {
			setDatabase(srcArray);
		}, 4000);

	
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


	return (
		<StyledMain>
			<StyledUl>
				{dataBase.map((item: string, i: number) => {
					return (
						<li key={i}>
						<img
							onLoad={() => {
								setAnimation(true);
							}}
							
							alt=""
							src={item}
							onClick={() => openImg(item)}
						/>
						</li>
					);
				})}
			</StyledUl>

			{currentImg === "" && (
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
			)}

			{isLoading && (
				<LoadingComponent animation={animation}>
					<img src={dino} alt="dino"></img>
					<span className="loading_gallery">
						Carregando Fotos, isso pode demorar um pouco{" "}
					</span>
					<img src={dots} alt="" className="dots" />
				</LoadingComponent>
			)}

			{currentImg !== "" && (
				<Swipeable
					config={swipe}
					onSwipeLeft={() => changeCurrentImg("next")}
					onSwipeRight={() => changeCurrentImg("prev")}
					onSwipeUp={() => setCurrentImg("")}
					onSwipeDown={() => setCurrentImg("")}
				>
					<StyledModal>
						<div>
							<LazyLoadImage alt="" src={currentImg} className="test" />
							<button
								onClick={() => setCurrentImg("")}
								className="gallery_close"
							>
								<IoMdClose size={20} />
							</button>
							<StyledArrow
								left
								leftClick={keyDownAnimation.left}
								onClick={() => changeCurrentImg("prev")}
							>
								<VscTriangleLeft size={40} />
							</StyledArrow>
							<StyledArrow
								rightClick={keyDownAnimation.right}
								onClick={() => changeCurrentImg("next")}
							>
								<VscTriangleRight size={40} />
							</StyledArrow>
						</div>
					</StyledModal>
				</Swipeable>
			)}
		</StyledMain>
	);
}
