import React, { useState } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(sq => sq !== null);
  const activePlayer = xIsNext ? 'X' : 'O';

  let status = `Next player: ${activePlayer}`;
  if (winner) status = `Winner: ${winner}`;
  if (isDraw) status = 'Draw';

  const handleClick = (index) => {
    // ignore click if suqare is occupied or game is over
    if (squares[index] || winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = activePlayer;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <>
      <style>{`
        .game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .squares-grid {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-template-rows: repeat(3, 100px);
          gap: 3px;
          margin: 20px 0;
        }

        .square {
          width: 100px;
          height: 100px;
          border: 1px solid #999;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          background: #fff;
          color: black;
        }
      `}</style>

      <div className='game-container'>
        <h1>Tic Tac Toe</h1>

        <div className='status' id='status'>{status}</div>
        
        <div className='squares-grid'>
          {squares.map((value, i) => (
            <button
              key={i}
              className='square'
              onClick={() => handleClick(i)}
            >
              {value}
            </button>
          ))}
        </div>
        
        <button id='reset' onClick={handleReset}>Reset Game</button>
      </div>
    </>
  )
}
  
function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
