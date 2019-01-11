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
        let postsRef = firebase.database().ref('posts').orderByChild('votes');
    
        let _this = this;
    
        postsRef.on('value', function(snapshot) {
          var posts = [];
          snapshot.forEach(child => {
            let obj = {
              id: child.key,
              post: child.val()
            }
            posts.unshift(obj)
          })
    
          _this.setState({
            posts: posts, 
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