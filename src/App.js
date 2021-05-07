import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./components/About";
import Footer from "./components/Footer"
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
            <Route path="/resume" component={Resume} />
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
