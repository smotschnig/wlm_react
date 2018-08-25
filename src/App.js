import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './components/Index';
import Team from './components/Team';
import References from './components/References';
import Competences from './components/Competences';

import Motschnig from './components/profiles/Motschnig';
import Wohl from './components/profiles/Wohl';
import Lueck from './components/profiles/Lueck';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Index} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/references" component={References} />
          <Route exact path="/competences" component={Competences} />
          <Route exact path="/motschnig" component={Motschnig} />
          <Route exact path="/wohl" component={Wohl} />
          <Route exact path="/lueck" component={Lueck} />
        </div>
      </Router>
    );
  }
}

export default App;
