import React, { Component } from 'react';
import GameState from "./GameState";

class GameHistory extends Component {

    constructor(){
        super();
        this.renderState = this.renderState.bind(this);
    }

    renderState(value, index, player=null){
        return <GameState
            key={index}
            status={value}
            player={player}
            onClick={() => this.props.onClick(index)}
        />
    }

    render() { 
        return (
            <div className="history">
                <p>Game History:</p>
                {
                    this.props.history.map((obj, index) => {
                        let status = obj.player ? `${obj.player}${obj.step}` : `${obj.step}`;
                        return obj.player ? 
                            this.renderState(status, index, obj.player.toLowerCase()) :
                                this.renderState(status, index);
                    })
                }
            </div>
        );
    }
}
 
export default GameHistory;