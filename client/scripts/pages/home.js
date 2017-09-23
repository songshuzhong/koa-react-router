import React, { Component } from 'react'
import { Link } from 'react-router';
import { Comm_Navaid } from '../components/commons/comm-navaid';

class Home extends Component {
  render() {
    return(
      <div className="App">
        <Comm_Navaid dataSource={`/common-navaid/data`} />
        {
          this.props.children
        }
      </div>
    )
  }
}

export { Home };