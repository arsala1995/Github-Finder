import React, { Component } from 'react'

export class User extends Component {
  //taking out the user data as soon as you press more on main page the api will be called and this page will fetch all the information as props and return them back.
  
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    //taking all the stuffs from api that are passed as props.
    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user

    const {loading} = this.props
    return (
      <div>
        {name}
      </div>
    )
  }
}

export default User
