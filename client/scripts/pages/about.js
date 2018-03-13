import React, { Component } from 'react'

import context from 'context';

class About extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: 'asdf'
    };
  }

  tiled( root, target, property ) {
    property = property || '';

    for ( let key in target ) {
      let newKey = '';
      let v = target[ key ];

      if ( typeof v === 'object' ) {
        newKey = property === ''? key: property + `.${ key }`;
        this.tiled( root, v, newKey );
      } else {
        newKey = property === ''? key: property + `.${ key }`;
        root[ newKey ] = v;
      }
    }
  }

  render() {
    return(
      <div>
        <p>JSON.stringify( this.state.data )</p>
        <img src={ `${ context.contextPath }/img/nodejs.png` } />
      </div>
    )
  }
}

export { About };
export default About;