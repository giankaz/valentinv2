import { useEffect } from "react";
import { useState } from "react";
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
			
			<p>
				
			</p>
		</StyledMain>
	);
}
