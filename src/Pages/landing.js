import React, { Component } from 'react';
import * as firebase from "firebase";
import Posts from '../components/posts';
import AddPost from '../components/AddPost';

class Landing extends Component {
    
      state = {
        posts: [], 
        loading: false
      }
    
      componentDidMount() {
        let postsRef = firebase.database().ref('posts');
    
        let _this = this;
        let posts = [];
    
        postsRef.on('value', function(snapshot) {
          snapshot.forEach(post => {
            posts.push(post.child('title').val());
          })
    
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
                <AddPost />
            </div>
        )
    }
}

export default Landing;