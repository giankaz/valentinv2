import { StyledMain } from "./styles";
import { TbArrowBack } from "react-icons/tb";
import Header from "../../components/Global/Header";
import { useHistory } from "react-router-dom";
import GamesCard from "../../components/Games/Card";
import LoadingComponent from "../../components/Global/Loading";
import { useEffect, useState } from "react";

export default function Games() {
	const [loading, setLoading] = useState(true)
	const history = useHistory();

	const handleBack = () => {
		history.push("/");
	};

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
	}, [])

	return (
		<StyledMain>
			<header>
				<div onClick={handleBack} className="gallery_return">
					<TbArrowBack size={35} />
				</div>
				<Header />
			</header>

			<section>
				<ul>
					<GamesCard
						gameTitle="Corrida da Matemática"
						gamePath="matematica-dino"
						bgImage="https://img.freepik.com/free-vector/dinosaur-pattern-kids-fabric-nursery-wallpaper-blue-detailed-background-with-jungle-palms-tropical-leaves-white-green-dinos-repeated-vector-tile_511660-441.jpg?w=2000"
					/>
				</ul>
			</section>

			{loading && <LoadingComponent/>}
		</StyledMain>
	);
}
