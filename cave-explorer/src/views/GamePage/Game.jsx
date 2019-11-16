import React from 'react';
import { withRouter } from 'react-router-dom';
import { GameArena, GameContainer } from '../ViewStyles/GameStyles';

import { Maze } from "../../components/Maze";
import { Player } from "../../components/Player";

import useMaze from "../../state/GameFunctions/gameFunctions";



const Game = ({ history }) => {
    // X and Y will represent the location of our player, the maze will be our 2darray generated into a board, loaded is a boolean of status, and directions will be available movements
    const { x, y, maze, loaded, directions } = useMaze();
    return (
        <GameContainer>
            {loaded && (
                <GameArena width={30} height={30}>
                    <Maze maze={maze} width={30} height={30} />
                    <Player x={x} y={y} />
                </GameArena>
            )}
        </GameContainer>
    );
};

export default withRouter(Game);