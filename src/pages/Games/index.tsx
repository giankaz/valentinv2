import { StyledMain } from "./styles";
import { TbArrowBack } from "react-icons/tb";
import Header from "../../components/Global/Header";
import { useHistory } from "react-router-dom";
import GamesCard from "../../components/Games/Card";

export default function Games() {
	const history = useHistory();

	const handleBack = () => {
		history.push("/");
	};

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
						gameTitle="Corrida Dino da Matemática"
						gamePath="matematica-dino"
						bgImage="https://img.freepik.com/free-vector/dinosaur-pattern-kids-fabric-nursery-wallpaper-blue-detailed-background-with-jungle-palms-tropical-leaves-white-green-dinos-repeated-vector-tile_511660-441.jpg?w=2000"
					/>
				</ul>
			</section>
		</StyledMain>
	);
}
