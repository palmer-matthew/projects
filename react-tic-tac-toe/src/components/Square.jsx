import React from 'react';

const Square = (props) => {
    return (
        <div className={`square ${props.value}`} onClick={props.handleClick}>
            {props.value}
        </div>
    );
}
 
export default Square;