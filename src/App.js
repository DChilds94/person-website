import React, { Component } from 'react'
import NavBar from './containers/NavBar.js'
import HomePage from './containers/HomePage.js'
import About from './components/About.js'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path = '/' component={HomePage} />
          {/* uncomment as you add the pages */}
          <Route path = '/about' component={About} />
          {/*<Route path = '/projects' component={Projects} />
          <Route path = '/contact' component={Contact} /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
