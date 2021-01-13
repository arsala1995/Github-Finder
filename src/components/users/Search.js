import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = (props) => {
// Search tab where a user will write the name in the text box and then it will be seen in database and its data will be returned.

const [text, setText] = useState('');


const onSubmit = (e) => {
  e.preventDefault()
  if(text === '' ) {
    props.setAlert('Please enter something', 'light')
  } else {
    props.searchUsers(text);
    setText('')

  }
}

const onChange = (e) => {
  setText( e.target.value);
}
  

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder="Search users.." value={text} onChange={onChange}/>
          <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form >
        {props.showClear && <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button> }
      </div>
    )
  
}

Search.proTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
