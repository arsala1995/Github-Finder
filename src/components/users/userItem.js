import React from 'react'
import propTypes from 'prop-types'

 const UserItem = (props) => {
  //receives user from Users and will print out the user's name and will give it access to go to the more information about user
  
    const { login, avatar_url, html_url } = props.user;

    return (
      <div className="card text-center">
        <img 
        src={avatar_url} alt="" className="round-img"
        style={{width : "60px"}}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user: propTypes.object.isRequired,
}

export default UserItem