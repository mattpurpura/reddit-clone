import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App'
import Posts from './components/posts.js'

const Routes = (props) => (
    <Router {...props}>
        <Route exact path='/' component={ App }></Route>
        <Route exact path='/posts' component={ Posts }></Route>
    </Router>
);

export default Routes;