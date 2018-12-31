import React, { Component } from 'react';

class Posts extends Component {

    constructor(props){
        super(props)
    }

    

    render(){
        console.log(Object.keys(this.props.posts))
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        };

        return (
            <div className='Posts'>
                {Object.keys(this.props.posts).map((post) => {
                    return(
                        <div>
                         {this.props.posts[post].title}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Posts;