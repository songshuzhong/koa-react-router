import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/app">app</Link></li>
        <li><Link to="/about">about</Link></li>
        { this.props.children }
      </ul>
    );
  }
}

export { Home };
export default Home;
