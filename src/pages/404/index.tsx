import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { StyledMain } from "./styles";

export default function NotFound() {
	const history = useHistory();
	const location = useLocation()

	useEffect(() => {
		if (location.pathname === '/foto-nao-encontrada') {
			setTimeout(() => {
				history.push('/galeria')
			}, 3000)
		} else {
				 	setTimeout(() => {
            history.push('/')
        }, 3000); 
		}

	}, []);
	return (
		<StyledMain>
			<img src="https://i.gifer.com/DKLV.gif" alt="" />
			<h1>Erro 404, não encontrado. </h1>
			<h2>Redirecionando...</h2>
		</StyledMain>
	);
}
