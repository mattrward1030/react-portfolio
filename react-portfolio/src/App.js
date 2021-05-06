import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Footer";
import ProjectsContainer from "./components/ProjectsContainer;
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            < ProjectsContainer />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
