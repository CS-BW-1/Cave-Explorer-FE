import React from 'react';
import { withRouter } from 'react-router-dom';
import { GameArena, GameContainer } from '../ViewStyles/GameStyles';




const Game = ({ history }) => {

    return (
        <GameContainer>
            <GameArena width={30} height={30}>

            </GameArena>
        </GameContainer>
    );
};

export default withRouter(Game);