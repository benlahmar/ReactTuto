class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="Case" onClick={this.props.onClick}>
      {this.props.value}
    </button>
    );
  }
}

class Board extends React.Component {

  //apres
  constructor(props) {
    super(props);
    this.state = {
      Cases: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const Cases = this.state.Cases.slice();
    if (calculateWinner(Cases) || Cases[i]) {
      return;
    }
    Cases[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      Cases: Cases,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderCase(i) {
    return <Case value={this.state.Cases[i]}  onClick={() => this.handleClick(i)}/>;
  }

  render() {
    let status;
     //status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');

    const winner = calculateWinner(this.state.Cases);
   
    if (winner) {
      status = winner + ' a gagné';
    } else {
      status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
    }


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCase(0)}
          {this.renderCase(1)}
          {this.renderCase(2)}
        </div>
        <div className="board-row">
          {this.renderCase(3)}
          {this.renderCase(4)}
          {this.renderCase(5)}
        </div>
        <div className="board-row">
          {this.renderCase(6)}
          {this.renderCase(7)}
          {this.renderCase(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/

function calculateWinner(Cases) {
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
    if (Cases[a] && Cases[a] === Cases[b] && Cases[a] === Cases[c]) {
      return Cases[a];
    }
  }
  return null;
}
