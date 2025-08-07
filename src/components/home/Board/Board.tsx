'use client'

import { useState, useEffect } from 'react';
import { Square } from "@/components/home/Square";

export const Board = () => {
  const [XIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [gameMessage, setGameMessage] = useState("");

  const defineWinner = (squares: string[]) => {
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
    return null;
  }

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setGameMessage("");
  }

  const handleClick = (i: number) => {
    if (squares[i] || defineWinner(squares) || gameMessage) {
      return;
    }
    const nextSquares = squares.slice();
    if (XIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!XIsNext);
  }

  useEffect(() => {
    const winner = defineWinner(squares);
    const checkDraw = () => {
      return squares.every(square => square !== "") && !winner;
    };

    if (winner && !gameMessage) {
      setGameMessage(`¡${winner} ha ganado! El juego se reiniciará automáticamente en 5 segundos...`);
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
    else if (checkDraw() && !gameMessage) {
      setGameMessage("¡Es un empate! El juego se reiniciará automáticamente en 3 segundos...");
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }, [squares, gameMessage]);


  let status;
  if (gameMessage) {
    status = gameMessage;
  } else {
    status = `Siguiente jugador: ${XIsNext ? "X" : "O"}`;
  }


  return (
    <>
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-8 text-3xl font-bold">{status}</div>
      <div className="grid grid-cols-3">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="grid grid-cols-3">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="grid grid-cols-3">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </main>
    
    </>
  );
}