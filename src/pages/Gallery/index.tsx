import { useEffect, useState } from "react";
import {
	TbArrowBack
} from "react-icons/tb";
import { useHistory } from "react-router-dom";
import GalleryFolder from "../../components/Global/GalleryFolder";
import Header from "../../components/Global/Header";
import LoadingComponent from "../../components/Global/Loading";
import { StyledMain } from "./styles";

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBokxAhCwSbXRnehbdC6z7JlYNwBPXVVuU",
	authDomain: "site-valentin.firebaseapp.com",
	projectId: "site-valentin",
	storageBucket: "site-valentin.appspot.com",
	messagingSenderId: "302720444451",
	appId: "1:302720444451:web:eb81039d3e1f54295a2996",
};

const firebaseApp = initializeApp(firebaseConfig);

export default function Gallery() {
	const [isLoading, setIsLoading] = useState(true);


	const [database, setDatabase] = useState([])

	const history = useHistory();

	const storage = getStorage(firebaseApp);
	const storageRef = ref(
		storage,
		`gs://site-valentin.appspot.com/images/`
	);


	useEffect(() => {
		
		const getItem = async () => {
			const srcArray: any = [];
			const list = await listAll(storageRef);
       

			const listArray = await list.prefixes;

			await listArray;
				

	 		listArray.forEach((listItem) => {
				const treatedWord = listItem.fullPath.split('images/')[1].replaceAll('-', ' ').split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
				const data = listItem.fullPath.split('images/')[1]
               

				srcArray.push({treatedWord, data})
			}); 

			return srcArray
		};

		getItem().then((res) =>	{
			setDatabase(res)
			setIsLoading(false)
		})
	}, []);

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
					{database.map((folder, i) => (
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
