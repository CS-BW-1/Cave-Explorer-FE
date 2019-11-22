import { useReducer, useEffect } from "react";
// import generate from "generate-maze";
import axiosWithHeader from "../utils/axiosWithToken";

const { min, max } = Math;

// CONSTANTS
const LOADED = "maze/LOADED";
const KEY_PRESS = "maze/KEY_PRESS";
const SUCCESS = "SUCCESS";
const ONLOAD = "ONLOAD";
const BUILD_MAZE = "maze/BUILD_MAZE";

// REDUCER
const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loaded: true, maze: payload };

    case SUCCESS:
      return { ...state, directions: payload };

    case ONLOAD:
      return { ...state, directions: payload };

    case BUILD_MAZE: {
      let grid = [];
      // Trim the grid down to something more managable

      for (let i = 0; i < 20; i++) {
        grid.push(payload.filter(room => room.y === i));
        if (i % 2 !== 0) {
          grid[i].reverse();
        }
      }
      // Test to make sure that these are still sorted
      console.log("Sort Test: ", grid);
      return { ...state, maze: grid };
    }

    case KEY_PRESS: {
      console.log("Reducer State Key:", state);
      const cell = state.maze[state.y][state.x];
      if (payload === "ArrowLeft" && cell.w_to)
        return { ...state, x: max(1, --state.x) };
      else if (payload === "ArrowUp" && cell.n_to)
        return { ...state, y: max(0, --state.y) };
      else if (payload === "ArrowRight" && cell.e_to)
        return { ...state, x: min(state.maze[0].length - 1, ++state.x) };
      else if (payload === "ArrowDown" && cell.s_to)
        return { ...state, y: min(state.maze.length - 1, ++state.y) };
      else {
        return state;
      }
    }

    default:
      return state;
  }
};

const useMaze = () => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0,
    directions: {}
  });

  console.log("UseMaze current state:", state);
  useEffect(() => {
    let maze = [];

    axiosWithHeader()
      .get("https://yaco-dev.herokuapp.com/api/rooms/")
      .then(res => {
        console.log(res.data);
        dispatch({ type: BUILD_MAZE, payload: res.data });
      })
      .catch(err => console.log("Get Maze Error", err));

    axiosWithHeader()
      .get("https://yaco-dev.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log("Server Response from Generating a maze Init", res);
        dispatch({ type: ONLOAD, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    const handleKeyPress = ({ key }) => {
      let direction = "";
      console.log("in handle maze/Key_Press :", key);
      if (key.includes("Arrow")) {
        if (key === "ArrowLeft") {
          direction = "w";
        } else if (key === "ArrowUp") {
          direction = "n";
        } else if (key === "ArrowDown") {
          direction = "s";
        } else if (key === "ArrowRight") {
          direction = "e";
        }
        dispatch({ type: KEY_PRESS, payload: key });
      }
      console.log("Direction OBJ: ", { direction });
      axiosWithHeader()
        .post("https://yaco-dev.herokuapp.com/api/adv/move/", {
          direction
        })
        .then(res => {
          console.log("Movement Response", res);
          dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch(err => console.log("Movement request error:", err));
    };
    console.log("Maze Prior to reaching dispatch", maze);
    dispatch({ type: LOADED, payload: maze });

    document.addEventListener("keydown", e => handleKeyPress(e));

    return () => document.removeEventListener("keydown");
  }, []);

  return state;
};

export default useMaze;
