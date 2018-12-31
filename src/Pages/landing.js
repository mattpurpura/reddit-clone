import React, { Component } from 'react';
import * as firebase from "firebase";
import Posts from '../components/posts'

class Landing extends Component {

    constructor() {
        super();
      }
    
      state = {
        posts: [], 
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

    render(){
        return(
            <div>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}

export default Landing;