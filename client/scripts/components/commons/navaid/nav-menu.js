import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import uuid from '../../../utilities/uuid';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 导航下拉子菜单
 */
class Nav_Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlDisplay: 'none',
      authDisplay: 'none',
      loginId: '',
      authLogged: false
    };
    this.handleClick = this.handleClick.bind( this );
    this.handleControlClick = this.handleControlClick.bind( this );
  }

  componentWillReceiveProps( nextProps ) {
    this.setState( { authDisplay: nextProps.hover } );
  }

  handleMouseEnter( item ) {
    this.props.onMouseEnter && this.props.onMouseEnter( item );
  }

  handleClick() {
    let authDisplay = this.state.authDisplay;
    if( authDisplay === 'none' ) {
      this.setState( { authDisplay: 'flex' } );
    } else {
      this.setState( { authDisplay: 'none' } );
    }
  }

  handleControlClick() {
    let controlDisplay = this.state.controlDisplay;
    if( controlDisplay === 'none' ) {
      this.setState( { controlDisplay: 'flex' } );
    } else {
      this.setState( { controlDisplay: 'none' } );
    }
  }

  render() {
    const { dataSource } = this.props;

    return (
      <div style={{ display: 'inline'}}>
        <ul className="nav-menu">
          {
            dataSource.map( ( item, index ) => {
              return(
                <li key={ uuid() }
                    className={ index === 0 ? `banner-title inline`: '' }
                    onMouseEnter={ this.handleMouseEnter.bind( this, item ) } >
                  <Link to={{ pathname: `/`, query: item }}>{ item.chlName } </Link>
                </li>
              );
            } )
          }
        </ul>
      </div>
    );
  }
}

Nav_Menu.contextTypes = {
  router: PropTypes.object.isRequired
};

export { Nav_Menu };
export default Nav_Menu;
