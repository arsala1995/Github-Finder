import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import './App.css';
import About from "./components/pages/About"
import axios from 'axios'

const App = () => {

  //initial states for users and loading
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  //search github users function that is passed to search file as props
  const searchUsers = async (text) => {

    setLoading(true);
    //fetches data from the github api
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    
    // //the state will be set as soon as the data is received.
    setUsers(res.data.items)
    setLoading(false)
  };

  //Get single github user using user's login name or username and the information will be passed as props to the user file
  const getUser = async (username) => {
    setLoading(true);
    //fetches data from the github api
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    
    // //the state will be set as soon as the data is received.
    setUser(res.data);
    setLoading(false);
  } 

  // Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    //fetches data from the github api
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    
    // //the state will be set as soon as the data is received.
    setRepos(res.data);
    setLoading(false);
  } 

  //clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // set alert if nothing is typed
  const showAlert = (msg, type) => {
    setAlert({msg:msg, type:type})
    // Timeout to remove alert message after five seconds
    setTimeout(() => setAlert(null), 5000);
  }

    return (
      <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true: false} setAlert={showAlert}/>
                <Users loading={loading} users={users} />
              </Fragment>
                
            )} 
          />
          <Route exact path="/about" component={About}></Route>
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading}/>
          )} />
        </Switch>
        </div>
      </div>
  
    </Router>
    );

}

export default App;
