import dino from "../../../assets/mathdino.png";
import cactus from "../../../assets/cactus.png";
import { StyledMain } from "./styles";
import { useEffect, useState } from "react";

export default function DinoMath() {
	const [jump, setJump] = useState(false);
	const [goDown, setGoDown] = useState(false);


	const [entrance, setEntrance] = useState(false)
	const [cactusFade, setCactusFade] = useState(false)
	const [cactusDisplayNone, setCactusDisplayNone] = useState(false)


	const [gameStarted, setGameStarted] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	const [stopGround, setStopGround] = useState(false);

	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);

	const [operator, setOperator] = useState(1);
	const [shownOperator, setShownOperator] = useState("+");
	const [answer, setAnswer] = useState<any>(null);
	console.log(`🤖 ~ DinoMath ~ answer`, answer);
	const [userAnswer, setUserAnswer] = useState<any>("");
	const [score, setScore] = useState(0);

	const getRandomInt = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	};

	const handleGameStart = () => {
		const newNumber1 = getRandomInt(1, 10);
		const newNumber2 = getRandomInt(1, 10);
		const newOperator = getRandomInt(1, 5);

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

	return (
		<StyledMain
		    gameStarted={gameStarted}
			jump={jump}
			goDown={goDown}
			entrance={entrance}
			cactusDisplayNone={cactusDisplayNone}
			cactusFade={cactusFade}

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
				src="https://i.pinimg.com/originals/ac/6e/06/ac6e06f77344e757114f4b3ac9fdd79c.gif"
				alt="sun"
				className="sun"
			/>

			<div className="score">{score}</div>

			{!gameStarted && (
				<div className="start">
					<p>Resolva os cáculos matématicos </p>
					<p>para pular sobre os inimigos!</p>
					<button onClick={handleGameStart}>Iniciar!</button>
				</div>
			)}
		</StyledMain>
	);
}
