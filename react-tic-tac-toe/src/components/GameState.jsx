import React from 'react';

const GameState = (props) => {
    return (  
        <div className={`state ${props.player}`} onClick={props.onClick}>
            {props.status}
        </div>
    );
}
 
export default GameState;