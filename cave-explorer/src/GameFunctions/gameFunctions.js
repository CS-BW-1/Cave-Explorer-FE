import { useReducer, useEffect } from "react";
import generate from "generate-maze";
import axiosWithHeader from "../utils/axiosWithToken";

const token = "Token " + localStorage.getItem("key");
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const { min, max } = Math;

// CONSTANTS
const LOADED = "maze/LOADED";
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

    default:
      return state;
  }
};

// STATE HOOK
const useMaze = () => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0,
    directions: {}
  });
  useEffect(() => {
    const maze = generate(30);

    axiosWithHeader()
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/", headers)
      .then(res => {
        console.log(res);
        dispatch({ type: ONLOAD, payload: res.data });
      })
      .catch(err => {
        console.log(err.response.data);
      });

    dispatch({ type: LOADED, payload: maze });

    // return () => document.removeEventListener("keydown", handleKeyPress); This will be for taking in movement inputs, I want the whole thing to be built into this custom hook and it to be self cleaning
  }, []);
  return state;
};

export default useMaze;
