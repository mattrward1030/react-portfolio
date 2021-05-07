import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import About from "./components/About";
import NoMatch from "./components/NoMatch";
import ProjectsContainer from "./components/ProjectsContainer";



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch />
          <Header />
          <Switch>
            <Route path="/" exact component={ProjectsContainer} />
            <Route path="/about" component={About} />
            <Route>
              <NoMatch />
            </Route>
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

export default App;
