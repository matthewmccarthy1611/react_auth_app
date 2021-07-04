import React, { Component } from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login'

class Home extends Component {
    constructor(props){
        super(props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleSuccessfulAuth(data){
        //TODO update parent component
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    handleLogoutClick(){
        this.props.handleLogout()
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <button onClick={() => this.handleLogoutClick()} >Logout</button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        );
    }
}

export default Home;
