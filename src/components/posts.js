import React, { Component } from 'react';
import VoteButtons from './VoteButtons';

class Posts extends Component {

    goToPost = (postId) => {
        window.location.assign(`/post/${postId}`);
    }

    render(){
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        };
console.log(this.props.posts)
        return (
            <div className='Posts'>

                {this.props.posts.map((post) => {
                    return(
                        <div key={post.id}>

                            <div>{post.post.votes}</div>

                            <div onClick={()=> this.goToPost(post.id)}>{post.post.title}</div>

                            <VoteButtons postId={post.id} />

                        </div>
                    )
                })}
                {/* {Object.keys(this.props.posts).map((postId) => {
                    return(
                        <div>

                            <div>{this.props.posts[postId].votes}</div>

                            <div onClick={() => this.goToPost(postId)}>
                            {this.props.posts[postId].title}
                            </div>

                            <VoteButtons postId={postId} />
                        </div>
                    )
                })} */}
            </div>
        );
    }
}

export default Posts;