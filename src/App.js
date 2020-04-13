import React from 'react';
import Container from '@material-ui/core/Container'
import './App.css';
import 'typeface-roboto'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './navi/Navigation'
import Home from "./routes/Home/Home";
import Intro from "./routes/intro/Intro";
import {CALCULATOR_PATH, HOME_PATH} from "./navi/paths";
import Calculate from "./routes/calculator/Calculate";

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Container>

          <div>
            <Switch>
              <Route path={HOME_PATH}>
                <Home/>
              </Route>
              <Route path={CALCULATOR_PATH}>
                <Calculate/>
              </Route>
              <Route path="/">
                <Intro/>
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>


</div>
);
}

export default App;
