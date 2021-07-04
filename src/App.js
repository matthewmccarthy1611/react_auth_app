import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { Component } from 'react';

class App extends Component{
  constructor() {
    super()
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
    console.log(data)
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact path='/'
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} />
              )} />
            <Route 
              exact path='/dashboard'
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
              )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
