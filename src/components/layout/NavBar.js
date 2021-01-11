import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
//The reason why we use Link is because when we do search and go to the about page and then return back link will save the search results, where as in a tag the search results will be gone.

const NavBar = (props) => {
  //navbar where the title will be shown with the background color and github icon
  
  return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={props.icon} />  {props.title}
        </h1>
        <ul>
          <li>
           <Link to='/'>Home</Link> 
            
          </li>
          <li>
          <Link to='/about'>About</Link> 
          </li>
        </ul>
      </nav>
    )
}

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

NavBar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
}

export default NavBar
