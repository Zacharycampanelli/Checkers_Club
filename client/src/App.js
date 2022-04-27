import logo from './logo.svg';
import Row from './components/Row';
import './App.css';

function App() {
  const data = [
    [' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
    ['X', ' ', 'X', ' ', 'X', ' ', 'X', ' '],
    [' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' '],
    [' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O'],
    ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' ']
  ]
  return (
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
      {data.map((rowData, index) => {
          const number = data.length - index
          
          return <Row key={number.toString()} number={number} data={rowData} />
        })}
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
  );
}

export default App;
