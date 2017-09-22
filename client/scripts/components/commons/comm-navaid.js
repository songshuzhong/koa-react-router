import React, { Component } from 'react';

import { Nav_Menu } from './navaid/nav-menu';

import dataToState from '../get-data';

import '../../../styles/comm-navaid.less';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 导航栏标题与logo
 */
class Comm_Navaid extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      hover: 'none',
      data: {},
      target: {},
    };

    this.handleMouseLeave = this.handleMouseLeave.bind( this );
    this.handleMouseEnter = this.handleMouseEnter.bind( this );
  }

  componentDidMount() {
    dataToState( this );
  }

  handleMouseEnter( item ){
    if ( item.chlCode === "head_product" )
      this.setState( { hover: 'flex', target: item } );
    else
      this.setState( { hover: 'none' } );
  }

  handleMouseLeave( hover ) {
    this.setState( { hover } );
  }

  render() {
    const { hover, data: { items }, target } = this.state;
    return(
      <div>
        <div className="nav-wrapper" style={{ backgroundColor: `black`, width: '100%' }}>
          { items? <Nav_Menu dataSource={ items } hover={ hover } onMouseEnter={ this.handleMouseEnter } />: null }
        </div>
        <div className="nav-wrapper" style={{ position: 'relative', zIndex: 0 }} />
      </div>
    );
  }
}

export { Comm_Navaid };
export default Comm_Navaid;
