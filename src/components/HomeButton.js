import React, { Component } from 'react';

class HomeButton extends Component {

returnToHome = () => {
    window.location.assign('/')
}

    render(){
        return(
            <button onClick={this.returnToHome}>Back to All Posts</button>
        )
    }
}

export default HomeButton;