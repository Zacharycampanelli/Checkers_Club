import { fixFirst } from '../../utils/fixFirst'
import Row from '../Row'
import BlackPiece from '../Pieces/BlackPiece'
import RedPiece from '../Pieces/RedPiece'
import BlackKing from '../Pieces/BlackKing'
import RedKing from '../Pieces/RedKing'

function Board() {
  const data = [
    [null, BlackPiece, null, BlackPiece, null, BlackPiece, null, BlackPiece],
    [BlackPiece, null, BlackPiece, null, BlackPiece, null, BlackPiece, null],
    [null, BlackPiece, null, BlackPiece, null, BlackPiece, null, BlackPiece],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [RedPiece, null, RedPiece, null, RedPiece, null, RedPiece, null],
    [null, RedPiece, null, RedPiece, null, RedPiece, null, RedPiece],
    [RedPiece, null, RedPiece, null, RedPiece, null, RedPiece, null]
  ]

  const makeRow = fixFirst(makeRowIn, data.length)

  return (
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
        {data.map(makeRow)}
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
  )
}

function makeRowIn(numberOfRows, rowData, index) {
  const number = numberOfRows - index;

  return <Row key={number.toString()} number={number} data={rowData} />;
}

export default Board;
