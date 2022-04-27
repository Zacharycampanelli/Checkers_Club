import redPiece from '../../assets/red-man.svg'

function RedPiece(props) {
    return (
        <img src={redPiece} alt={'A red piece.'} className={'piece'} />
    )
}

export default RedPiece