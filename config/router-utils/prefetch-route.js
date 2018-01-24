import React, { createElement } from 'react';
import { Route } from 'react-router';

class PrefetchRoute extends Route {

  render() {
    const { match } = this.state;
    const { children, component, render } = this.props;
    const { history, route, staticContext } = this.context.router;
    const location = this.props.location || route.location;
    const data = this.props.data || route.data;
    const props = { match, location, history, staticContext, data };

    return (
        component ? (
            match ? createElement( component, props ) : null
        ) : render ? (
            match ? render( props ) : null
        ) : children ? (
            typeof children === 'function' ? (
                children( props )
            ) : !isEmptyChildren( children ) ? (
                React.Children.only( children )
            ) : (
                null
            )
        ) : (
            null
        )
    );
  }

}

PrefetchRoute.displayName = 'PrefetchRoute';

export default PrefetchRoute;