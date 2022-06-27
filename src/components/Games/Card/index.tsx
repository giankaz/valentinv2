import { StyledDiv } from './styles'
import dino from '../../../assets/mathdino.png'
import { useHistory } from 'react-router-dom';

interface GamesCardProps {
    gameTitle: string;
    gamePath: string;
    bgImage: string;
}

export default function GamesCard({gameTitle, gamePath, bgImage}: GamesCardProps) {

    const history = useHistory()

    const handleGameStart = (path: string) => {
        history.push(`/jogos/${path}`)
    }

  return (
    <StyledDiv onClick={() => handleGameStart(gamePath)} bgImage={bgImage}>
            <img src={dino} alt='dino' />
            <h1>{gameTitle}</h1>
            <div className='floor'></div>
    </StyledDiv>
  )
}
