import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../media/logo.svg';
import '../../styles/app.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h2>Welcome to React!</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="contentBox">
          <ul className="nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/plan">计划表</Link></li>
            <li><Link to="/test">二级路由</Link></li>
          </ul>
          <div className="content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export { Home };
export default Home;
