import React, { Component } from 'react';

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

        return (
            <div className='Posts'>
                {Object.keys(this.props.posts).map((postId) => {
                    return(
                        <div onClick={() => this.goToPost(postId)}>
                         {this.props.posts[postId].title}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Posts;