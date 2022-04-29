import blackPiece from '../../assets/black-man.svg'

function BlackPiece(props) {
    return (
        <img src={blackPiece} alt={'A black piece.'} className={'piece'} />
    )
}

export default BlackPiece