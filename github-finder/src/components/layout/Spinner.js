import React, {Fragment} from 'react'
import spinner from './spinner.gif'
 const Spinner = () => {
  //will be used while the data is being fetched, so user will be seeing loading screen.

  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={{width:'200px', margin:'auto', display: 'block'}} />
    </Fragment>
  )
}

export default Spinner