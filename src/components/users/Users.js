import React from 'react'
import UserItem from './userItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = (props) => {
  //users function where it will map over all the users received from the API call and will pass it to UserItem to give css design to each one of them.
  
  if(props.loading) {
    return <Spinner />
  } else {

    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
 
  }

  Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

  }

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
