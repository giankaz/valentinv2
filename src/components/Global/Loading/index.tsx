import React, { useEffect, useState } from "react";
import { StyledLoading } from "./styles";
import ReactLoading from "react-loading";

export default function LoadingComponent() {
	const [dots, setDots] = useState("...");

	useEffect(() => {
      setTimeout(() => {
        if (dots === '...') setDots('.')
        if (dots === '..') setDots('...')
        if (dots === '.') setDots('..')
      }, 1000)
		
	}, [dots]);
  
	return (
		<StyledLoading>
			<ReactLoading type="spinningBubbles" />
			<p className="loading">Carregando{dots}</p>
		</StyledLoading>
	);
}
