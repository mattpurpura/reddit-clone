import React, { Component } from 'react';
import config from './firebase-config.js';
import * as firebase from "firebase";

class App extends Component {

  constructor() {
    super();

    firebase.initializeApp(config);
  }

  state = {
    posts: '', 
    loading: false
  }

  componentDidMount() {
    let postsRef = firebase.database().ref('posts');

    let _this = this;

    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());



      _this.setState({
        posts: snapshot.val(), 
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
       Hello World
      </div>
    );
  }
}

export default App;
