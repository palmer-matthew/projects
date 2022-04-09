import React from 'react';
import Square from './Square';

const Board = (props) => {

    const renderSquare = i => <Square 
                                key={i}
                                place={i} 
                                value={props.game[i]} 
                                handleClick={() => props.handleClick(i)}
                            />;
    return (
        <div>
            <div className="status">{props.status}</div>
            <div className="grid-3-col">
                {[0,1,2].map(i => renderSquare(i))}
            </div>
            <div className="grid-3-col">
                {[3,4,5].map(i => renderSquare(i))}
            </div>
            <div className="grid-3-col">
                {[6,7,8].map(i => renderSquare(i))}
            </div>
        </div>
    );
}
 
export default Board;