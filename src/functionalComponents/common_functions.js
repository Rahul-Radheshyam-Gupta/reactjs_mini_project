// const handleClick = (i,xIsNext, stepNumber, setHistory, setStepNumber, setXIsNext)=>{
//     // var history = history.slice();
//     var history = history.slice(0, stepNumber + 1);
//     var current_squares = history[history.length-1];
//     var squares = current_squares.squares.slice();
//     // Dont allow to update a square value if its already filled or game is finished
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = xIsNext ? 'X' : 'O';
//     console.log("Clicked Event fired ", i, squares);


//     setHistory(history.concat([squares]));
//     setStepNumber(history.length);
//     setXIsNext(!xIsNext);
//   }

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

  export default {calculateWinner};