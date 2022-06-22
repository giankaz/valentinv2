import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StyledMain } from "./styles";

export default function NotFound() {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
            history.push('/')
        }, 3000);
	}, []);
	return (
		<StyledMain>
			<img src="https://i.gifer.com/DKLV.gif" alt="" />
			<h1>Erro 404, não encontrado. </h1>
			<h2>Redirecionando para home.</h2>
		</StyledMain>
	);
}
