import './App.css';
import { fixFirst } from './utils'
import Row from './components/Row'
import BlackPiece from './components/Pieces/BlackPiece'
import RedPiece from './components/Pieces/RedPiece'
import BlackKing from './components/Pieces/BlackKing'
import RedKing from './components/Pieces/RedKing'
function App() {
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

export default App;
