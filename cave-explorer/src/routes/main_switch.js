import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";
import Game from "../pages/Game";
import PrivateRoute from "./PrivateRoute";

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    {/* This will be Replaced with privateroute when the time comes.*/}
    <PrivateRoute path="/" component={Game} />{" "}
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default appRoutes;
