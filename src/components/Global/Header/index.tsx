import { AiFillInstagram, AiFillPicture } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export default function Header() {
	return (
		<StyledHeader>
			<section>
				<div>
					<a href="https://www.instagram.com/">
						<AiFillInstagram size={40} />
						<p>Instagram</p>
					</a>
				</div>
				<div>
					<Link to="/galeria">
						<AiFillPicture size={40} />
						<p>Galeria</p>
					</Link>
				</div>
			</section>

			<section>
				<div>
					<Link to="/jogos">
						<IoLogoGameControllerB size={40} />
						<p>Jogos</p>
					</Link>
				</div>
				<div>
					<GiWhiteBook size={40} />
					<p>Estudos</p>
				</div>
			</section>
		</StyledHeader>
	);
}
