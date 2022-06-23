import { useEffect, useState } from "react";
import Card from "../Global/Card";
import { StyledMain } from "./styles";

export default function SecondHome() {
	const [age, setAge] = useState(0);
	useEffect(() => {
		const getAge = () => {
			const today = new Date();
			const birthDate = new Date("2022/03");
			const newAge =
				(today.getFullYear() - birthDate.getFullYear()) * 12 +
				(today.getMonth() - birthDate.getMonth());
			setAge(newAge);
		};
		getAge();
	}, []);

	return (
		<StyledMain>
			<h2>Bem vindos ao meu Site!</h2>

			<p>
				Me chamo Valentin Cabral Rossi, sou filho do Gian e da Tifani e tenho{" "}
				{age} meses de vida, meu pai criou esse site para registrar minhas
				fotinhos e acompanhar meu crescimento.
			</p>
			
			<p className="subtitle">
				No meu site você encontra:
			</p>

			<section>
				<div className="section_div">
				<Card description="Galeria com fotos para acompanhar o meu crescimento!" title='Fotos' imgSRC={'https://64.media.tumblr.com/tumblr_m0ix1zifQF1robyh3o1_640.gifv'} path='galeria'/>
				<Card description="Área de estudos *Em construção*" title='Estudos' imgSRC={'https://c.tenor.com/lGVZtKeEqzgAAAAM/dinosandcomics-dinosaur.gif'} path='construindo'/>
				</div>
				<div className="section_div">
				<Card description="Jogos educativos de tema infantil *Em construção*" title='Jogos' imgSRC={'https://media0.giphy.com/media/3o7TKJ5JF2fM6XcOpq/giphy.gif?cid=ecf05e479r890mkm73f3cawbf32ccx32tfq3uhe9tzstrea2&rid=giphy.gif&ct=g'} path='construindo'/>
				<Card description="Que ama seu nenê mais que tudo!" title='Um Pai Babão' imgSRC={'https://media1.giphy.com/media/q3uDB1eaA2jEk/200.gif'} path='/'/>

				</div>
					<p className="section_continue">Continua...</p>
			</section>
		</StyledMain>
	);
}
