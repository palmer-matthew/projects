import React, {useState} from 'react';
import Board from './Board';
import GameHistory from './GameHistory';
import calculateWinner from '../functions';

const Game = () => {
    const [history, setHistory] = useState([{
        game: Array(9).fill(null), 
        step: 'Game Start',
        player: null
    }]);

    const [player, setPlayer] = useState('X');

    const current = history[history.length -1];

    const handleClick = (i) => {
        if (current.game[i] || calculateWinner(current.game)) {
            return;
        }
        const row = Math.floor(i / 3);
        const col = i % 3;

        const newState = {
            game: current.game.map((val, index) => i === index ? player : val),
            step: ` moved to space (${row},${col})`,
            player: player
        };

        setHistory(state => {
            const ns = state.slice();
            ns.push(newState);
            return ns;
        });

        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const jumpTo = (i) => {
        setHistory(state => state.slice(0, i+1));
        setPlayer(i % 2 === 0 ? 'X' : 'O');
    }

    const winner = calculateWinner(current.game);
    const gameisOver = !winner && current.game.every(i => i);
    let status = winner ? `Winner is: ${winner}` : `Next player : ${player}`;

    return ( 
        <div className="flex-between">
            <GameHistory 
                history={history}
                onClick={jumpTo}
            />
            <Board 
                status={gameisOver ? 'Game Over' : status}
                game={current.game}
                handleClick={handleClick}
            />
        </div>
    );
}
 
export default Game;