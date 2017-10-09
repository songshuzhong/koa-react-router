import React from 'react' ;
import { Route } from 'react-router-dom';
import { App } from '../pages/app';
import { About } from '../pages/about' ;
import { Home } from '../pages/home' ;

export default () => (
  <div>
    <Route path="/" component={ Home }/>
    <Route path="/app" component={ App }/>
    <Route path="/about" component={ About }/>
  </div>
);