import { AiFillInstagram, AiFillPicture } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export default function Header() {
	const history = useHistory()

	const handleClick = (path: string) => {
		history.push(`/${path}`)
	}

	return (
		<StyledHeader>
			<section>
				<div >
					<a href="https://www.instagram.com/valentin.cabral.rossi/?igshid=YmMyMTA2M2Y=" target='_blank' rel="nofollow noopener noreferrer">
						<AiFillInstagram size={40} />
					</a>
						<p onClick={() => window.open('https://www.instagram.com/valentin.cabral.rossi/?igshid=YmMyMTA2M2Y=')}>Instagram</p>
				</div>
				<div onClick={() => handleClick('galeria')}>
					<Link to="/galeria">
						<AiFillPicture size={40} />
					</Link>
						<p>Galeria</p>
				</div>
			</section>

			<section>
				<div onClick={() => handleClick('jogos')}>
					<Link to="/jogos">
						<IoLogoGameControllerB size={40} />
					</Link>
						<p>Jogos</p>
				</div>
				<div onClick={() => handleClick('construindo')}>
				    <Link to="/construindo">
					<GiWhiteBook size={40} />
					</Link>
					<p>Estudos</p>
				</div>
			</section>
		</StyledHeader>
	);
}
