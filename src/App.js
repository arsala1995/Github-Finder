import React, { Component } from 'react'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    //initial states for users and loading
    users: [],
    loading: false
  }


  async componentDidMount() {
    //this will fetch data as soon as the page is opened so the user can receive the data
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
    //the state will be set as soon as the data is received.
    this.setState({ users: res.data, loading: false })


  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );

  }
}

export default App;
