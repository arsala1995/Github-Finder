import React, { Component } from 'react'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    //initial states for users and loading
    users: [],
    loading: false
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

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false}/>
        <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );

  }
}

export default App;
