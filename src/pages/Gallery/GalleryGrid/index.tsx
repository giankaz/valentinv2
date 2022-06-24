import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbArrowBack, TbArrowBigUpLines } from "react-icons/tb";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory, useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { defineSwipe, Swipeable } from "react-touch";
import LoadingComponent from "../../../components/Global/Loading";
import { StyledArrow, StyledMain, StyledModal, StyledUl } from "./styles";

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useLocation } from "react-router-dom";

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
	const [isLoading, setIsLoading] = useState(true);
	const [currentImg, setCurrentImg] = useState("");

	const [keyDownAnimation, setKeyDownAnimation] = useState({
		left: false,
		right: false,
	});

	const history = useHistory();
	const location = useLocation();

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
			const newImg = dataBase[dataBase.length - 1];
			const photoToken = newImg.split("token=")[1];
			history.push(`/galeria/${id}/${photoToken}`);

		} else if (currentIndex === dataBase.length - 1 && type === "next") {

			const newImg = dataBase[0];
			const photoToken = newImg.split("token=")[1];
			history.push(`/galeria/${id}/${photoToken}`);

		} else {

			if (type === "next") {
				const newImg = dataBase[currentIndex + 1];
				const photoToken = newImg.split("token=")[1];
				history.push(`/galeria/${id}/${photoToken}`);

			} else {
				const newImg = dataBase[currentIndex - 1];
				const photoToken = newImg.split("token=")[1];
				history.push(`/galeria/${id}/${photoToken}`);
			}
		}
	};

	const onKeyDown = (e: any) => {
		if (e.key === "ArrowRight" || e.key === "d") {
			changeCurrentImg("next");
			setKeyDownAnimation({ left: false, right: true });
			setTimeout(() => {
				setKeyDownAnimation({ left: false, right: false });
			}, 100);
		}
		if (e.key === "ArrowLeft" || e.key === "a") {
			changeCurrentImg("prev");
			setKeyDownAnimation({ right: false, left: true });
			setTimeout(() => {
				setKeyDownAnimation({ right: false, left: false });
			}, 400);
		}
		if (e.key === "Escape") {
			setCurrentImg("");
			history.push(`/galeria/${id}`)
		}
	};

	useEffect(() => {
		document.body.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.removeEventListener("keydown", onKeyDown);
		};
	}, [currentImg]);

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
		const token = location.pathname.split("/")[3];

		if (token) {
			if (dataBase.length > 2) {
				const newCurrentImg = dataBase.find(
					(src: any) => src.split("token=")[1] === token
				);

				if (newCurrentImg) {
					setCurrentImg(newCurrentImg);
				} else {
					history.push("/foto-nao-encontrada");
				}
			}
		} else {
			setCurrentImg("");
		}
	}, [location, dataBase]);


	const handleBack = () => {
		history.push("/galeria");
	};

	const openImg = (src: string) => {
		setCurrentImg(src);
		const photoToken = src.split("token=")[1];

		history.push(`/galeria/${id}/${photoToken}`);
	};

	return (
		<StyledMain>
			<StyledUl>
				{dataBase.map((item: string, i: number) => {
					return (
						<li key={i}>
							<img
								onLoad={() => {
									setIsLoading(false);
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
				<LoadingComponent/>
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
								onClick={() => {
									setCurrentImg("");
									history.push(`/galeria/${id}`);
								}}
								className="gallery_close"
							>
								<IoMdClose size={30} />
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
