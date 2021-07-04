import React, { Component } from 'react';
import Registration from './auth/Registration';

class Home extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <Registration />
            </div>
        );
    }
}

export default Home;
