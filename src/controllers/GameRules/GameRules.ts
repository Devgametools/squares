/*import { useState, useEffect } from 'react';

export function GameRules() {
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

}*/
