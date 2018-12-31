import React, { Component } from 'react';

class Posts extends Component {

    constructor(props){
        super(props)
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
                {this.props.posts.map((post) => {
                    console.log(this.props.posts.indexOf(post))
                    return(
                        <div key={this.props.posts.indexOf(post)}>
                            {post.title}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Posts;