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
					<a href="https://www.instagram.com/valentin.cabral.rossi/?igshid=YmMyMTA2M2Y=" target='_blank' rel="nofollow noopener noreferrer">
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
					<Link to="/construindo">
						<IoLogoGameControllerB size={40} />
						<p>Jogos <span>Em breve</span></p>
					</Link>
				</div>
				<div>
				    <Link to="/construindo">
					<GiWhiteBook size={40} />
					<p>Estudos <span>Em breve</span></p>
					</Link>
				</div>
			</section>
		</StyledHeader>
	);
}
