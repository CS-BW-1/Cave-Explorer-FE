import React from 'react';
import { withRouter } from 'react-router-dom';
import { GameArena, GameContainer } from './PageStyles/GameStyles';
import map from '../assets/image(2).png'
import { Maze } from "../components/Maze";
import { Player } from "../components/Player";
import { Dashboard } from "../components/Dashboard";

import useMaze from "../GameFunctions/gameFunctions";



const Game = () => {
    // X and Y will represent the location of our player, the maze will be our 2darray generated into a board, loaded is a boolean of status, and directions will be available movements
    const { x, y, maze, loaded, directions } = useMaze();
    return (
        <GameContainer>
            {loaded && (
                <>
                    <Dashboard directions={directions} />
                    <GameArena width={50} height={55}>
                        <img src={map} alt="Graphic representation of the Map" />
                        <Player x={x} y={y} />
                    </GameArena>
                </>
            )}
        </GameContainer>
    );
};

export default withRouter(Game);