import React, { Component } from 'react'
import HomePage from './containers/HomePage.js'
import NavBar from './containers/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path = '/' Component={HomePage} />
          {/* uncomment as you add the pages */}
          {/* <Route path = '/about' Component={About} />
          <Route path = '/projects' Component={Projects} />
          <Route path = '/contact' Component={Contact} /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
