import dino from "../../../assets/mathdino.png";
import cactus from "../../../assets/cactus.png";
import { StyledMain } from "./styles";
import { useEffect, useState } from "react";
import moon from '../../../assets/moon.webp'
import sun from '../../../assets/sun.gif'
import ground from "../../../assets/ground.png";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../../components/Global/Loading";


export default function DinoMath() {
	const [jump, setJump] = useState(false);
	const [goDown, setGoDown] = useState(false);


	const [entrance, setEntrance] = useState(false)
	const [cactusFade, setCactusFade] = useState(false)
	const [cactusDisplayNone, setCactusDisplayNone] = useState(false)

	const [night, setNight] = useState(true)


	const [gameStarted, setGameStarted] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [loading, setLoading] = useState(true)

	const [stopGround, setStopGround] = useState(false);

	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);

	const [operator, setOperator] = useState(1);
	const [shownOperator, setShownOperator] = useState("+");
	const [answer, setAnswer] = useState<any>(null);

	const [userAnswer, setUserAnswer] = useState<any>("");
	const [score, setScore] = useState(0);

	const history = useHistory()

	const getRandomInt = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	};

	const handleGameStart = () => {
		const newNumber1 = getRandomInt(1, 10);
		const newNumber2 = getRandomInt(1, 10);
		const newOperator = getRandomInt(1, 3);

		setNumber1(newNumber1);
		setNumber2(newNumber2);
		setOperator(newOperator);

		setGameStarted(true)
		setEntrance(false)
		
		setTimeout(() => {
			setEntrance(true)
			setShowMessage(true);
			setCactusDisplayNone(true)
			setStopGround(true);
		

		}, 2000)
	};

	useEffect(() => {

		setTimeout(() => setNight(true), 1000)
		setTimeout(() => setNight(false), 2000)
		setTimeout(() => setLoading(false), 2500)
	    
	}, [])

	useEffect(() => {
		if (operator === 1) {
			const newAnswer = number1 > number2 ? Math.round(number1 + number2) : Math.round(number2 + number1);
			setAnswer(newAnswer);
			setShownOperator("+");
		} else if (operator === 2) {
			const newAnswer = number1 > number2 ? Math.round(number1 - number2) : Math.round(number2 - number1);
			setAnswer(newAnswer);
			setShownOperator("-");
		} else if (operator === 3) {
			const newAnswer = number1 > number2 ? Math.round(number1 / number2) : Math.round(number2 / number1);
			setAnswer(newAnswer);
			setShownOperator("/");
		} else if (operator === 4) {
			const newAnswer = number1 > number2 ? Math.round(number1 * number2) : Math.round(number2 * number1);
			setAnswer(newAnswer);
			setShownOperator("X");
		}
	}, [number1, number2, operator]);

	useEffect(() => {
		if (userAnswer == answer) {
			setScore(score + 1);
			setJump(true);
	
			setEntrance(true)
			setCactusFade(true)
		

			setTimeout(() => {
				setJump(false);
				setGoDown(true);
				setUserAnswer("");
				setShowMessage(false);
			}, 600);

			setTimeout(() => {
				setGoDown(false);
				setEntrance(false)
		    	setCactusFade(false)

				setCactusDisplayNone(false)
			}, 1300);

			setTimeout(() => {
				handleGameStart()
			}, 2000)
		}
	}, [userAnswer]);

	useEffect(() => {
		if (score % 4 === 0) {
			setNight(!night)
		}
	} , [score])

	return (
		<StyledMain
		    gameStarted={gameStarted}
			jump={jump}
			goDown={goDown}
			entrance={entrance}
			cactusDisplayNone={cactusDisplayNone}
			cactusFade={cactusFade}
			night={night}
			stopGround={stopGround}
		>
			<section>

				<img src={dino} alt="" className="dino" />
				<div className="shadow"></div>
				<img src={cactus} alt="cactus" className="cactus" />
				<div className="cactus_shadow"></div>
			</section>

			{showMessage && (
				<div className="msg_box">
					<p>
						{number1 > number2 ? `${number1} ${shownOperator} ${number2}` : `${number2} ${shownOperator} ${number1}`} = ?
					</p>

					<input
						type="number"
						autoFocus
						value={userAnswer}
						onChange={(e) => setUserAnswer(e.target.value)}
					/>
				</div>
			)}

			<img
				src={night ? moon : sun}
				alt="sun"
				className={night? 'moon' : 'sun'}
			/>

			<div className="score">{score}</div>

			{!gameStarted && (
				<div className="start">
					<p>Resolva os cálculos para </p>
					<p>pular sobre os inimigos!</p>
					<button onClick={handleGameStart}>Iniciar!</button>
				</div>
			)}
			

			<div className="btns">
				<button onClick={() => history.push('/jogos')}>Voltar</button>
				<button onClick={() => document.location.reload()}>Reiniciar</button>
			</div>

			<div  className="ground"></div>


		 	{loading && 
			<LoadingComponent/>
			} 
		</StyledMain>
	);
}
