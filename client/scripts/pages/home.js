import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <div className="App">
        {
          this.props.children
        }
      </div>
    )
  }
}

export { Home };