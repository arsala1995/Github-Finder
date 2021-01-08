import React from 'react'
import propTypes from 'prop-types'


const NavBar = (props) => {
  //navbar where the title will be shown with the background color and github icon
  
  return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={props.icon} />  {props.title}
        </h1>
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
