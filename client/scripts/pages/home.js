import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Home!!!</h2>
          <ul>
            <li><Link to="/app">app</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Home };
export default Home;
