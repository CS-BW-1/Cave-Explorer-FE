import { useReducer, useEffect } from "react";
import generate from "generate-maze";
import axiosWithHeader from "../utils/axiosWithToken";

const { min, max } = Math;

// CONSTANTS
const LOADED = "maze/LOADED";
const KEY_PRESS = "maze/KEY_PRESS";
const SUCCESS = "SUCCESS";
const ONLOAD = "ONLOAD";

// REDUCER
const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loaded: true, maze: payload };

    case SUCCESS:
      return { ...state, directions: payload };

    case ONLOAD:
      return { ...state, directions: payload };

    case KEY_PRESS: {
      console.log("Reducer State Key:", state);
      const cell = state.maze[state.y][state.x];
      if (payload === "ArrowLeft" && !cell.left)
        return { ...state, x: max(0, --state.x) };
      else if (payload === "ArrowUp" && !cell.top)
        return { ...state, y: max(0, --state.y) };
      else if (payload === "ArrowRight" && !cell.right)
        return { ...state, x: min(state.maze[0].length, ++state.x) };
      else if (payload === "ArrowDown" && !cell.bottom)
        return { ...state, y: min(state.maze.length, ++state.y) };
      else: return state

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
    const maze = generate(30);

    axiosWithHeader()
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
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
      axiosWithHeader()
        .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
          direction
        })
        .then(res => {
          console.log("Movement Response", res);
          dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch(err => console.log("Movement request error:", err));
    };

    dispatch({ type: LOADED, payload: maze });

    document.addEventListener("keydown", e => handleKeyPress(e));

    return () => document.removeEventListener("keydown");
  }, []);
  return state;
};

export default useMaze;
