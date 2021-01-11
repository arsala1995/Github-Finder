import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import './App.css';
import About from "./components/pages/About"
import axios from 'axios'

class App extends Component {
  state = {
    //initial states for users and loading
    users: [],
    loading: false,
    alert: null
  }


  //search github users function that is passed to search file as props
  searchUsers = async (text) => {

    this.setState({ loading: true });
    //fetches data from the github api
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    
    // //the state will be set as soon as the data is received.
    this.setState({ users: res.data.items, loading: false })
  };

  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  // set alert if nothing is typed
  setAlert = (msg, type) => {
    this.setState({ alert: {msg:msg, type:type } });

    // Timeout to remove alert message after five seconds
    setTimeout(() => this.setState({ alert: null}), 5000);
  }

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false} setAlert={this.setAlert}/>
                <Users loading={this.state.loading} users={this.state.users} />
              </Fragment>
                
            )} 
          />
          <Route exact path="/about" component={About}></Route>
        </Switch>
        </div>
      </div>
  
    </Router>
    );

  }
}

export default App;
