import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const User = (props) => {
  //taking out the user data as soon as you press more on main page the api will be called and this page will fetch all the information as props and return them back.
  
  useEffect(() => {
    props.getUser(props.match.params.login)
    props.getUserRepos(props.match.params.login);
    // eslint-disable-next-line
  }, [])

 
    //taking all the stuffs from api that are passed as props.
    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = props.user


    if(props.loading) return <Spinner />;

    return <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable: {' '}
      {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' /> }
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' alt='' style={{width: '150px'}} />
        <h1>{name}</h1>
        <p>Location: {location}</p>
        </div>
        <div>
          {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1' >
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username:</strong> {login}  
              </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company:</strong> {company}  
              </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                <strong>Website:</strong> {blog}  
              </Fragment>}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>

      <Repos repos={props.repos} />

    </Fragment>
        
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUSerRepos: PropTypes.func.isRequired
}

export default User
