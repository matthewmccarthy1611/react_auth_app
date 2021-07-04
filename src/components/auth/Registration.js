import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/registrations', {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.status === 'created'){
                    this.props.handleSuccessfulAuth(res.data)
                } else {
                    console.log('Error')
                }
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
