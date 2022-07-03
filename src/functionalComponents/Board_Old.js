import Square from "./square";
import { useState } from "react";

const Board = ()=>{
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    var winner = calculateWinner(squares);
    var status = winner ? ('Yeah! Winner is '+(xIsNext ? 'X' : 'O')) : ('Next Player '+(xIsNext?'X':'O'));
    console.log("Final Winner ", status);
    return (
        <div className="board">
          <div className="board-row">
            <Square index={0} value={squares[0]} onClick={()=> updateSquaresList(0, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={1} value={squares[1]} onClick={()=> updateSquaresList(1, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={2} value={squares[2]} onClick={()=> updateSquaresList(2, xIsNext, setXIsNext, setSquares, squares)}/>
          </div>
          <div className="board-row">
            <Square index={3} value={squares[3]} onClick={()=> updateSquaresList(3, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={4} value={squares[4]} onClick={()=> updateSquaresList(4, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={5} value={squares[5]} onClick={()=> updateSquaresList(5, xIsNext, setXIsNext, setSquares, squares)}/>
          </div>
          <div className="board-row">
            <Square index={6} value={squares[6]} onClick={()=> updateSquaresList(6, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={7} value={squares[7]} onClick={()=> updateSquaresList(7, xIsNext, setXIsNext, setSquares, squares)}/>
            <Square index={8} value={squares[8]} onClick={()=> updateSquaresList(8, xIsNext, setXIsNext, setSquares,squares)}/>
          </div>
        </div>
    )
}

// old function but not saving history and no way to do undo or redo - so we need to move the states to Game components
const updateSquaresList = (index,xIsNext, setXIsNext, setSquares, squares)=> {
  var winner = calculateWinner(squares);
  console.log('Calculated winner is ', winner);
    if(winner || squares[index]){
      return;
    }

    console.log("Update List called ", index, squares)
    squares[index] = xIsNext ? 'X' : 'O';
    setSquares(squares);
    setXIsNext(!xIsNext);
}


const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    console.log(">>>", squares)
    // eslint-disable-next-line eqeqeq
    var is_tie = squares.indexOf(null) == '-1'
    return (is_tie ? 'Tie' : null);
  }
  
  export default Board;
