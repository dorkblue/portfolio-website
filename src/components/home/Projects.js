import React from 'react'
import {Link} from 'react-router-dom'

const Projects = (props) => {
  return (
    <div className='content_container'>
      <div className='content_header'>
        <h2>Past & Current Projects</h2>
        <Link to='/works'>more works</Link>
      </div>
      <div className='content_content'>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Projects
