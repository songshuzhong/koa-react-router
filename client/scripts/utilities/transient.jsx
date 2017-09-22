import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/** 定义了一个容器组件，用来控制使用 popup 展示的所有组件 */
class Transient extends Component {
  /** 初始状态值 */
  constructor( props ) {
    super( props );

    this.state = { nodes: [] };

    this.add = this.add.bind( this );
    this.remove = this.remove.bind( this );
    this.addProps = this.addProps.bind( this );
  }

  /** 添加组件 */
  add( Component ) {
    this.setState( ( previousState ) => {
      const nodes = previousState.nodes;

      if ( !nodes.filter( ( node ) => node === Component ).length ) {
        return { nodes: nodes.concat( Component ) };
      }
    } );
  }

  /** 删除组件 */
  remove( Component ) {
    this.setState( ( previousState ) => {

      return {
        nodes: previousState.nodes.filter( ( node ) => {
          return node !== Component;
        } )
      };
    } );
  }

  /** 为添加的组件增加 key 值和方法 */
  addProps( key, component ) {
    const props = {};

    props.key = key;
    props._self = component;
    props._onDisappear = this.remove;

    return React.cloneElement( component, props );
  }

  /** 渲染组件 */
  render() {
    const nodeItems = this.state.nodes.map( ( node, index ) => {
      return this.addProps( index, node );
    } );

    return (
      <div className="epm transient">
        { nodeItems }
      </div>
    );
  }
}

/** Transient 本质是个方法，扩展一个方法 */
Transient.newInstance = function newInstance( props ) {
  const div = document.createElement( 'div' );

  document.body.appendChild( div );

  const transient = ReactDOM.render( <Transient { ...props } />, div );

  return {
    add( Component ) {
      transient.add( Component );
    },
    remove( Component ) {
      transient.remove( Component );
    },
    component: transient,
    destroy() {
      ReactDOM.unmountComponentAtNode( div );
      document.body.removeChild( div );
    }
  };
};

const that = {};

/** 展示 */
const popup = ( Component ) => {
  that.transient = that.transient || Transient.newInstance( { } );

  return that.transient.add( Component );
};

/** 隐藏 */
const popover = ( Component ) => {
  that.transient = that.transient || Transient.newInstance( { } );

  return that.transient.remove( Component );
};

const destroy = () => {
  if ( that.transient ) {
    that.transient.destroy();
    that.transient = null;
  }
};

export { popup, popover, destroy };
