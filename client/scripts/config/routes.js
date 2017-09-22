import React from 'react' ;
import { Route, IndexRoute } from 'react-router' ;
import { App } from '../pages/app';
import { About } from '../pages/about' ;
import { Home } from '../pages/home' ;

module.exports = (
  <Route path="/" component={ Home }>
    <IndexRoute component={ App }/>
    <Route path="/app" component={ App }/>
    <Route path="/about" component={ About }/>
  </Route>
)