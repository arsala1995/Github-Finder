import React, { Component } from 'react'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import alert, { Alert } from './components/layout/Alert'
import './App.css';
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
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false} setAlert={this.setAlert}/>
        <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );

  }
}

export default App;
