import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router} from 'react-router-dom'
import history from "./history"


class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Dashboard />
        </Router>
    );
  }
}

export default App;
