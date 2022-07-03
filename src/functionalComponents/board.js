import Square from "./square";

const Board = (props)=>{
  var history = props.history.slice(0, props.stepNumber + 1);
  var current_squares = history[history.length-1];
  var squares = current_squares.squares.slice();
  return (
      <div className="board">
        <div className="board-row">
          <Square index={0} value={squares[0]} onClick={()=> props.onClick(0, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={1} value={squares[1]} onClick={()=> props.onClick(1, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={2} value={squares[2]} onClick={()=> props.onClick(2, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
        </div>
        <div className="board-row">
          <Square index={3} value={squares[3]} onClick={()=> props.onClick(3, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={4} value={squares[4]} onClick={()=> props.onClick(4, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={5} value={squares[5]} onClick={()=> props.onClick(5, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
        </div>
        <div className="board-row">
          <Square index={6} value={squares[6]} onClick={()=> props.onClick(6, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={7} value={squares[7]} onClick={()=> props.onClick(7, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
          <Square index={8} value={squares[8]} onClick={()=> props.onClick(8, props.stepNumber, props.setStepNumber, props.xIsNext, props.setXIsNext, props.history, props.setHistory)}/>
        </div>
      </div>
  )
}


const calculateWinner  = (squares) => {
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