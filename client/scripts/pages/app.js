import React, { Component } from 'react';

import { getDataSource } from '../utilities/dataSource';

import logo from '../../media/logo.svg';
import '../../styles/app.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = { val: 0 };
  }

  componentWillMount() {

  }

  componentDidMount() {
/*    let p1 = fetch( '/common-navaid/data' );
    let p2 = fetch( '/common-navaid/data' );

    let faster = Promise.race( [ p1, p2 ] ).then( res => console.log( res ) );
    console.log( faster );*/

    getDataSource( '/common-navaid/data', ( data ) => console.log( data ) );
  }

  componentWillReceiveProps( nextProps ) {

  }

  shouldComponentUpdate() {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export { App };
export default App;
