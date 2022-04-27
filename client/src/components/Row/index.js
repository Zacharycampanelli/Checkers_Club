
   
import { fixFirst } from '../../utils'
import Square from '../Square'

function Row(props) {
    const makeSquare = fixFirst(makeSquareForRow, props.number)

    return (
        <tr>
            <th>{props.number}</th>
            {props.data.map(makeSquare)}
            <th>{props.number}</th>
        </tr>
    )
}

function makeSquareForRow(rowNumber, Piece, index) {
    const column = String.fromCharCode(97 + index)

    return (
        <Square
            key={column + rowNumber}
            row={rowNumber}
            column={column}
        >
            {Piece && <Piece />}
        </Square>
    )
}

export default Row