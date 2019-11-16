import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../views/LoginPage/login";
import Register from "../views/RegisterPage/Register";
import Game from "../views/GamePage/Game";
import PrivateRoute from "./PrivateRoute";

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/" component={Game} /> /* This will be Replaced with privateroute when the time comes.*/
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default appRoutes;
