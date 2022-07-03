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
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      xIsNext : true
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(this.state.squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i){
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={
          ()=> this.handleClick(i)
        } 
        />
    )
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    console.log("Winner is ", winner);
    let status = winner ? (winner==='Tie' ? 'Game is Tie' : 'Yeah! Winner is '+winner) : ('Next Player : '+(this.state.xIsNext?'X':'O'));
    return (
      <>
      <div className="gameScreen">
        <h3 style={{textAlign:"center"}}>{status}</h3>
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
        </div>
      </>
    )
  }
}

class Game extends React.Component {
  render(){
    return (
      <div>
        <h1 style={{textAlign:"center"}}> Smart Tic Toe Game </h1>
        <div className="game">
          <Board />
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
  var winner;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  var is_tie = squares.indexOf(null) == '-1'
  return (is_tie ? 'Tie' : null);
}
// ========================================
var ReactDOM = require('react-dom/client');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);