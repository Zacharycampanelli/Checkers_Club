// Game State Data

const board = [
  null,
  0,
  null,
  1,
  null,
  2,
  null,
  3,
  4,
  null,
  5,
  null,
  6,
  null,
  7,
  null,
  null,
  8,
  null,
  9,
  null,
  10,
  null,
  11,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  12,
  null,
  13,
  null,
  14,
  null,
  15,
  null,
  null,
  16,
  null,
  17,
  null,
  18,
  null,
  19,
  20,
  null,
  21,
  null,
  22,
  null,
  23,
  null,
];

// Finds where the piece is located on the board
let findPiece = function (pieceId) {
  let parsed = parseInt(pieceId);
  return board.indexOf(parsed);
};

// Dom refrences
const cells = document.querySelectorAll('td');
let redsPieces = document.querySelectorAll('.red-piece');
let blacksPieces = document.querySelectorAll('.black-piece');
const redTurnText = document.querySelectorAll('.red-turn-text');
const blackTurnText = document.querySelectorAll('.black-turn-text');
const divider = document.querySelector('#divider');

// Player properties
let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

// Selected piece
let selectedPiece = {
  pieceId: -1,
  indexOfBoardPiece: -1,
  isKing: false,
  seventhSpace: false,
  ninthSpace: false,
  fourteenthSpace: false,
  eighteenthSpace: false,
  minusSeventhSpace: false,
  minusNinthSpace: false,
  minusFourteenthSpace: false,
  minusEighteenthSpace: false,
};

// Initialize event listeners on pieces
function givePiecesEventListeners() {
  if (turn) {
    for (let i = 0; i < redsPieces.length; i++) {
      redsPieces[i].addEventListener('click', getPlayerPieces);
    }
  } else {
    for (let i = 0; i < blacksPieces.length; i++) {
      blacksPieces[i].addEventListener('click', getPlayerPieces);
    }
  }
}

// Holds the length of the players piece count
function getPlayerPieces() {
  if (turn) {
    playerPieces = redsPieces;
  } else {
    playerPieces = blacksPieces;
  }
  removeCellonclick();
  resetBorders();
}

// Removes the onclick attribute for all cells on board
function removeCellonclick() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeAttribute('onclick');
  }
}

// Resets borders to default
function resetBorders() {
  for (let i = 0; i < playerPieces.length; i++) {
    playerPieces[i].style.border = '1px solid white';
  }
  resetSelectedPieceProperties();
  getSelectedPiece();
}

// Resets properties of the selectedPiece back to normal
function resetSelectedPieceProperties() {
  selectedPiece.pieceId = -1;
  selectedPiece.pieceId = -1;
  selectedPiece.isKing = false;
  selectedPiece.seventhSpace = false;
  selectedPiece.ninthSpace = false;
  selectedPiece.fourteenthSpace = false;
  selectedPiece.eighteenthSpace = false;
  selectedPiece.minusSeventhSpace = false;
  selectedPiece.minusNinthSpace = false;
  selectedPiece.minusFourteenthSpace = false;
  selectedPiece.minusEighteenthSpace = false;
}

// Gets ID and index of the board cell its on
function getSelectedPiece() {
  selectedPiece.pieceId = parseInt(event.target.id);
  selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
  isPieceKing();
}

// Checks if selected piece is a king
function isPieceKing() {
  if (document.getElementById(selectedPiece.pieceId).classList.contains('king')) {
    selectedPiece.isKing = true;
  } else {
    selectedPiece.isKing = false;
  }
  getAvailableSpaces();
}

// Analyzes the surrounding cells that a piece can make without jumping another piece
function getAvailableSpaces() {
  if (
    board[selectedPiece.indexOfBoardPiece + 7] === null &&
    cells[selectedPiece.indexOfBoardPiece + 7].classList.contains('noPieceHere') !== true
  ) {
    selectedPiece.seventhSpace = true;
  }

  if (
    board[selectedPiece.indexOfBoardPiece + 9] === null &&
    cells[selectedPiece.indexOfBoardPiece + 9].classList.contains('noPieceHere') !== true
  ) {
    selectedPiece.ninthSpace = true;
  }

  if (
    board[selectedPiece.indexOfBoardPiece - 7] === null &&
    cells[selectedPiece.indexOfBoardPiece - 7].classList.contains('noPieceHere') !== true
  ) {
    selectedPiece.minusSeventhSpace = true;
  }

  if (
    board[selectedPiece.indexOfBoardPiece - 9] === null &&
    cells[selectedPiece.indexOfBoardPiece - 9].classList.contains('noPieceHere') !== true
  ) {
    selectedPiece.minusNinthSpace = true;
  }
  checkAvailableJumpSpaces();
}

// Same as checkAvailableJumpSpace() except for jumping the pieces
function checkAvailableJumpSpaces() {
  if (turn) {
    if (
      board[selectedPiece.indexOfBoardPiece + 14] === null &&
      cells[selectedPiece.indexOfBoardPiece + 14].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece + 7] >= 12
    ) {
      selectedPiece.fourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece + 18] === null &&
      cells[selectedPiece.indexOfBoardPiece + 18].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece + 9] >= 12
    ) {
      selectedPiece.eighteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 14] === null &&
      cells[selectedPiece.indexOfBoardPiece - 14].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece - 7] >= 12
    ) {
      selectedPiece.minusFourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 18] === null &&
      cells[selectedPiece.indexOfBoardPiece - 18].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece - 9] >= 12
    ) {
      selectedPiece.minusEighteenthSpace = true;
    }
  } else {
    if (
      board[selectedPiece.indexOfBoardPiece + 14] === null &&
      cells[selectedPiece.indexOfBoardPiece + 14].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece + 7] < 12 &&
      board[selectedPiece.indexOfBoardPiece + 7] !== null
    ) {
      selectedPiece.fourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece + 18] === null &&
      cells[selectedPiece.indexOfBoardPiece + 18].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece + 9] < 12 &&
      board[selectedPiece.indexOfBoardPiece + 9] !== null
    ) {
      selectedPiece.eighteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 14] === null &&
      cells[selectedPiece.indexOfBoardPiece - 14].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece - 7] < 12 &&
      board[selectedPiece.indexOfBoardPiece - 7] !== null
    ) {
      selectedPiece.minusFourteenthSpace = true;
    }
    if (
      board[selectedPiece.indexOfBoardPiece - 18] === null &&
      cells[selectedPiece.indexOfBoardPiece - 18].classList.contains('noPieceHere') !== true &&
      board[selectedPiece.indexOfBoardPiece - 9] < 12 &&
      board[selectedPiece.indexOfBoardPiece - 9] !== null
    ) {
      selectedPiece.minusEighteenthSpace = true;
    }
  }
  checkPieceConditions();
}

// Restricts movement depending on if the piece is a king
function checkPieceConditions() {
  if (selectedPiece.isKing) {
    givePieceBorder();
  } else {
    // not a king
    if (turn) {
      // remove minus movements for red pieces
      selectedPiece.minusSeventhSpace = false;
      selectedPiece.minusNinthSpace = false;
      selectedPiece.minusFourteenthSpace = false;
      selectedPiece.minusEighteenthSpace = false;
    } else {
      // remove normal movements for black pieces
      selectedPiece.seventhSpace = false;
      selectedPiece.ninthSpace = false;
      selectedPiece.fourteenthSpace = false;
      selectedPiece.eighteenthSpace = false;
    }
    givePieceBorder();
  }
}

// Gives the piece a green hilight for the user (showing its movable)
function givePieceBorder() {
  if (
    selectedPiece.seventhSpace ||
    selectedPiece.ninthSpace ||
    selectedPiece.fourteenthSpace ||
    selectedPiece.eighteenthSpace ||
    selectedPiece.minusSeventhSpace ||
    selectedPiece.minusNinthSpace ||
    selectedPiece.minusFourteenthSpace ||
    selectedPiece.minusEighteenthSpace
  ) {
    document.getElementById(selectedPiece.pieceId).style.border = '3px solid green';
    giveCellsClick();
  } else {
    return;
  }
}

// Give cells an onclick attribute based on the possible moves selectedPiece has
function giveCellsClick() {
  if (selectedPiece.seventhSpace) {
    cells[selectedPiece.indexOfBoardPiece + 7].setAttribute('onclick', 'makeMove(7)');
  }
  if (selectedPiece.ninthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 9].setAttribute('onclick', 'makeMove(9)');
  }
  if (selectedPiece.fourteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 14].setAttribute('onclick', 'makeMove(14)');
  }
  if (selectedPiece.eighteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece + 18].setAttribute('onclick', 'makeMove(18)');
  }
  if (selectedPiece.minusSeventhSpace) {
    cells[selectedPiece.indexOfBoardPiece - 7].setAttribute('onclick', 'makeMove(-7)');
  }
  if (selectedPiece.minusNinthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 9].setAttribute('onclick', 'makeMove(-9)');
  }
  if (selectedPiece.minusFourteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 14].setAttribute('onclick', 'makeMove(-14)');
  }
  if (selectedPiece.minusEighteenthSpace) {
    cells[selectedPiece.indexOfBoardPiece - 18].setAttribute('onclick', 'makeMove(-18)');
  }
}

// END OF FUNCTION CHAIN FOR CLICKING A PIECE

// Moves a piece
function makeMove(number) {
  // clears current space
  document.getElementById(selectedPiece.pieceId).remove();
  cells[selectedPiece.indexOfBoardPiece].innerHTML = '';
  if (turn) {
    if (selectedPiece.isKing) {
      // new HTML element for the created Red King
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="red-piece king" id="${selectedPiece.pieceId}"></p>`;
      // saves new piece into memory
      redsPieces = document.querySelectorAll('.red-piece');
    } else {
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="red-piece" id="${selectedPiece.pieceId}"></p>`;
      redsPieces = document.querySelectorAll('.red-piece');
    }
  } else {
    if (selectedPiece.isKing) {
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="black-piece king" id="${selectedPiece.pieceId}"></p>`;
      blacksPieces = document.querySelectorAll('.black-piece');
    } else {
      cells[
        selectedPiece.indexOfBoardPiece + number
      ].innerHTML = `<p class="black-piece" id="${selectedPiece.pieceId}"></p>`;
      blacksPieces = document.querySelectorAll('.black-piece');
    }
  }

  let indexOfPiece = selectedPiece.indexOfBoardPiece;
  // if move is a jump, pass extra parameter to changeData which is the position of the piece getting jumped
  if (number === 14 || number === -14 || number === 18 || number === -18) {
    changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);
  } else {
    changeData(indexOfPiece, indexOfPiece + number);
  }
}

// Changes the board states data on the back end
function changeData(indexOfBoardPiece, modifiedIndex, removePiece) {
  // change original position of selected piece to null, make the position equal to id of the piece that was moved
  board[indexOfBoardPiece] = null;
  board[modifiedIndex] = parseInt(selectedPiece.pieceId);
  // if reds turn
  if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
    document.getElementById(selectedPiece.pieceId).classList.add('king');
  }
  // if blacks turn
  if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
    document.getElementById(selectedPiece.pieceId).classList.add('king');
  }
  // if removePiece parameter is present, remove piece
  if (removePiece) {
    board[removePiece] = null;
    // if reds turn, subtract from black score
    if (turn && selectedPiece.pieceId < 12) {
      cells[removePiece].innerHTML = '';
      blackScore--;
    }
    // if blacks turn, remove from red score
    if (turn === false && selectedPiece.pieceId >= 12) {
      cells[removePiece].innerHTML = '';
      redScore--;
    }
  }
  // reset data for next turn
  resetSelectedPieceProperties();
  removeCellonclick();
  // removes the 'onClick' event listeners for pieces
  removeEventListeners();
}

// Removes the 'onClick' event listeners for pieces
function removeEventListeners() {
  if (turn) {
    // if reds turn, loop through all redsPieces and remove click event listener
    for (let i = 0; i < redsPieces.length; i++) {
      redsPieces[i].removeEventListener('click', getPlayerPieces);
    }
  } else {
    for (let i = 0; i < blacksPieces.length; i++) {
      blacksPieces[i].removeEventListener('click', getPlayerPieces);
    }
  }
  checkForWin();
}

// Check for winner
// delete for loop-only used when there are multiple options(mobile, desktop) for [player]TurnText
function checkForWin() {
  if (blackScore === 0) {
    divider.style.display = 'none';
    for (let i = 0; i < redTurnText.length; i++) {
      redTurnText[i].style.color = 'black';
      blackTurnText[i].style.display = 'none';
      redTurnText[i].textContent = 'RED WINS!';
    }
  } else if (redScore === 0) {
    divider.style.display = 'none';
    for (let i = 0; i < blackTurnText.length; i++) {
      blackTurnText[i].style.color = 'black';
      redTurnText[i].style.display = 'none';
      blackTurnText[i].textContent = 'BLACK WINS!';
    }
  }
  changePlayer();
}

// Switches players turn
function changePlayer() {
  if (turn) {
    turn = false;
    for (let i = 0; i < redTurnText.length; i++) {
      redTurnText[i].style.color = 'lightGrey';
      blackTurnText[i].style.color = 'black';
    }
  } else {
    turn = true;
    for (let i = 0; i < blackTurnText.length; i++) {
      blackTurnText[i].style.color = 'lightGrey';
      redTurnText[i].style.color = 'black';
    }
  }
  givePiecesEventListeners();
}

givePiecesEventListeners();
