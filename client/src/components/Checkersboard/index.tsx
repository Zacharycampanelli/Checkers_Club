import './checkerboard.css';
import Tile from '../Tile';

const verticalAxis = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

interface Piece {
  image: string
  x: number
  y: number
}

const pieces: Piece[] =[];

// starting position of the red checker pieces
for(let i =0; i < 8; i++){
  //  row 5 from the y axis
  pieces.push({image:'assets/images/red.svg',x: 1, y:5})
  pieces.push({image:'assets/images/red.svg',x: 3, y:5})
  pieces.push({image:'assets/images/red.svg',x: 5, y:5})
  pieces.push({image:'assets/images/red.svg',x: 7, y:5})
  //  row 6 from the y axis
  pieces.push({image:'assets/images/red.svg',x: 0, y:6})
  pieces.push({image:'assets/images/red.svg',x: 2, y:6})
  pieces.push({image:'assets/images/red.svg',x: 4, y:6})
  pieces.push({image:'assets/images/red.svg',x: 6, y:6})
  //  row 7 from the y axis
  pieces.push({image:'assets/images/red.svg',x: 1, y:7})
  pieces.push({image:'assets/images/red.svg',x: 3, y:7})
  pieces.push({image:'assets/images/red.svg',x: 5, y:7})
  pieces.push({image:'assets/images/red.svg',x: 7, y:7})
}
//  starting position of the black checker pieces
for(let i =0; i < 8; i++){
  // row 2 from y axis
  pieces.push({image:'assets/images/black.svg',x: 0, y:2})
  pieces.push({image:'assets/images/black.svg',x: 2, y:2})
  pieces.push({image:'assets/images/black.svg',x: 4, y:2})
  pieces.push({image:'assets/images/black.svg',x: 6, y:2})
  // row 1 from y axis
  pieces.push({image:'assets/images/black.svg',x: 1, y:1})
  pieces.push({image:'assets/images/black.svg',x: 3, y:1})
  pieces.push({image:'assets/images/black.svg',x: 5, y:1})
  pieces.push({image:'assets/images/black.svg',x: 7, y:1})
  // row 0 from y axis
  pieces.push({image:'assets/images/black.svg',x: 0, y:0})
  pieces.push({image:'assets/images/black.svg',x: 2, y:0})
  pieces.push({image:'assets/images/black.svg',x: 4, y:0})
  pieces.push({image:'assets/images/black.svg',x: 6, y:0})
}



export default function Checkersboard () {
  // Movement of the Pieces
  let activePiece: HTMLElement | null = null;

  // grab piece
  function grabPiece (e: React.MouseEvent) {
  const element = e.target as HTMLElement;
  if(element.classList.contains('checkerpiece')){
    const x = e.clientX -50;
    const y = e.clientY -50;
    element.style.position = 'absolute';
    element.style.left =`${x}px`;
    element.style.top =`${y}px`;

    activePiece = element
    }
  }

  // move piece
  function movePiece(e: React.MouseEvent){
    if(activePiece){ 
      const x = e.clientX -50;
      const y = e.clientY -50;
      activePiece.style.position = 'absolute';
      activePiece.style.left =`${x}px`;
      activePiece.style.top =`${y}px`;
    }
  }

  //drop piece

  function dropPiece(e: React.MouseEvent){
    if(activePiece){
      activePiece = null;
    }
  }

  //checker pieces on the board
  let board =[];
  
  for(let j =  verticalAxis.length-1; j >= 0; j--){
  for(let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach(p => {
        if (p.x === i && p.y === j){
          image = p.image;
        }
      })
     board.push (<Tile key={`${j},${i}`} image={image} number= {number} />);
    }
  }

  return (
    <div 
    onMouseMove={e => movePiece(e)} 
    onMouseDown={e => grabPiece(e)}
    onMouseUp={e => dropPiece(e)}  
    id='checkersboard'
    >
      {board}
    </div>
  )
};
 