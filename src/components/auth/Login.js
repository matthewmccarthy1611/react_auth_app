import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loginErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/sessions', {
            user: {
                email: this.state.email,
                password: this.state.password,
            }
        }, {
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                // if (res.data.status === 'created'){
                //     this.props.handleSuccessfulAuth(res.data)
                // } else {
                //     console.log('Error')
                // }
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type='email'
                        name='email' 
                        placeholder='Email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required />
                    <input 
                        type='password'
                        name='password' 
                        placeholder='Password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required />
                    <input 
                        type='password'
                        name='password_confirmation' 
                        placeholder='Password confirmation' 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange}
                        required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;
