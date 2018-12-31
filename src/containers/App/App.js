import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import config from './firebase-config.js';
import * as firebase from "firebase";
import Landing from '../../Pages/landing';
import Posts from "../../components/posts";

class App extends Component {

  constructor() {
    super();

    firebase.initializeApp(config);
  }

  render() {
    // console.log(this.state.posts)
    return (
     <Router>
       <Switch>
          <Route exact path = '/' component= { Landing }/>
       </Switch>
     </Router>
    );
  }
}

export default App;
