import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.scss";

import { GameContainer, FirstPageContainer } from "./containers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/play" component={GameContainer} />
        <Route exact path="/" component={FirstPageContainer} />
      </Switch>
    </Router>
  );
};

export default App;
