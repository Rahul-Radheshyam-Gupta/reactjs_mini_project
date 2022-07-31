import {useState} from 'react';
import Board from "./board";     
const Game = (props) => {
    console.log("Game Props", props)
    const [stepNumber, setStepNumber] = useState(0);                             
    const [xIsNext, setXIsNext] = useState(true);  
    const [history, setHistory] = useState([{ squares : Array(9).fill(null) },]);
    
    const [xName, setXName] = useState('X');                             
    const [oName, setOName] = useState('O');                             

    var current_squares = history[history.length-1];
    var squares = current_squares.squares.slice();
    var winner = calculateWinner(squares);  
    var status = winner ? (winner === 'Tie' ? 'Game is Tie' : ((winner == 'X' ? xName : oName)+' won!') ): ('Next Player '+(xIsNext? xName:oName));

    // Store User's Moves and append it to the list of moves
    const moves = history.map(function(step, move){
      let move_name = move==0 ? 'Go to first step' : ('Move #'+move)
      return (
        <li key={move}>
          <button 
          style={{textAlign:"center", width:"300px", padding:"2px 5px", marginBottom:"5px", fontFamily:"sans-serif"}}
          onClick={()=> jumpToStep(move, setStepNumber, setXIsNext)}>
            {move_name}
          </button>
        </li>
      )
    })

    return (
      <div className="game" style={ props.isDarkMode ? {'color': 'white'} : {'color': 'black'} }>
        <h1
          style={{
            textAlign: "center",
            border: "3px solid black",
            width: "75%",
            margin: "30px auto",
          }}
        >
          Smart Tic Toe Game
        </h1>
        <div className="gameScreen">
          <div class="player-detail">
            <label> X Player Name </label>
            <input type="text" value={xName} onChange={ (e)=> setXName(e.target.value)} ></input>
            <br/><br/>
            <label> O Player Name </label>
            <input type="text" value={oName} onChange={ (e)=> setOName(e.target.value)} ></input>
          </div>
          <Board
            history={history}
            xIsNext={xIsNext}
            stepNumber={stepNumber}
            onClick={
              // index is passed from board and rest of all are passed from the parent game
              (index) =>
                handleClick(
                  index,
                  stepNumber,
                  setStepNumber,
                  xIsNext,
                  setXIsNext,
                  history,
                  setHistory
                )
            }
          />
          <div className="game-info">
            <h3 style={{textAlign:"center"}}> {status} </h3>
            <ul style={{textAlign:"center", listStyle:"None" }} > {moves} </ul>
          </div>
        </div>
      </div>
    );
}

function jumpToStep(move, setStepNumber, setXIsNext){
  setStepNumber(move);
  setXIsNext(move%2===0);
}

function handleClick(index, stepNumber, setStepNumber, xIsNext, setXIsNext, history, setHistory){
  // var history = this.state.history.slice();
  var history = history.slice(0, stepNumber + 1);
  var current_squares = history[history.length-1];
  var squares = current_squares.squares.slice();

  if (calculateWinner(squares) || squares[index]) {
    return;
  }
  squares[index] = xIsNext ? 'X' : 'O';
  console.log("Clicked Event fired ", index, squares);

  setHistory(
      history.concat([
        { 'squares':squares }
      ])  
    )
  setStepNumber(history.length);
  setXIsNext(!xIsNext);
};

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

  var is_tie = squares.indexOf(null) == '-1'
  return (is_tie ? 'Tie' : null);
}


export default Game;