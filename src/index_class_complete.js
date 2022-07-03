import React from "react";
import './index.css';
class Square extends React.Component{
  render() {
    return (
      <button 
        className="square"
        // onClick={()=>{ this.setState({value:'X'}); }}
        onClick={()=>{ this.props.onClick(); }}
        >
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i){
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={
          ()=> this.props.onClick(i)
        } 
        />
    )
  }

  render() {
    return (
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    )
  }
}


// Lifting states to the Game component from the Board component
class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history : [{
        squares : Array(9).fill(null)
      }],
      stepNumber : 0,
      xIsNext : true
    }
  }

  handleClick(i){
    // var history = this.state.history.slice();
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    var current_squares = history[history.length-1];
    var squares = current_squares.squares.slice();
    // Dont allow to update a square value if its already filled or game is finished
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log("Clicked Event fired ", i, squares);

    this.setState({
      history: history.concat([
        {
          'squares':squares,
        }
      ]),
      stepNumber : history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    console.log("Jump to ",step)
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render(){
    var history = this.state.history.slice();
    // var current_squares = history[history.length-1];
    var current_squares = history[this.state.stepNumber];
    var squares = current_squares.squares;
    const winner = calculateWinner(squares);
    console.log("Winner is ", winner);
    let status = winner ? (winner==='Tie' ? 'Game is Tie' : 'Yeah! Winner is '+winner) : ('Next Player : '+(this.state.xIsNext?'X':'O'));
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <h1 style={{textAlign:"center"}}> Smart Tic Toe Game </h1>
        <div className="gameScreen">
          <Board 
            squares={squares}
            onClick={
              (i)=> this.handleClick(i)
            }
          />
          <div className="game-info">
            <h2>Game Info </h2>
            <h3> {status}</h3>
            <ol> {moves} </ol>
          </div>
        </div>
      </div>

    )
  }
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
// ========================================
var ReactDOM = require('react-dom/client');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);