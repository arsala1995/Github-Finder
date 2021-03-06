import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

 const UserItem = (props) => {
  //receives user from Users and will print out the user's name and will give it access to go to the more information about user
  
    const { login, avatar_url } = props.user;

    return (
      <div className="card text-center">
        <img 
        src={avatar_url} alt="" className="round-img"
        style={{width : "60px"}}
        />
        <h3>{login}</h3>

        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    )
}

UserItem.propTypes = {
  user: propTypes.object.isRequired,
}

export default UserItem
