import redPiece from '../assets/red.svg'
import blackPiece from '../assets/black.svg'

function RedPiece(props) {
    const player = props.data === 'O' ? 'red' : 'black'

    return (
        <img src={player === 'red' ? blackPiece : redPiece} alt={`A ${player} piece.`} className={'piece'} />
    )
}