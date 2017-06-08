import React from 'react'
import {Link} from 'react-router-dom'

import './Projects.css'

const Projects = (props) => {
  switch (props.currentProject) {
    case 'all':
      return (
        <div className='content_container2'>
          <div className='content_header'>
            <h2>WORKS</h2>
            <div className='content_subheader'>
              <h4>recent / past&nbsp;</h4>
            </div>
          </div>
          <div className='content_content projects_container'>
              <section className='projects_excerpt_container' id='project1'>
                  <h5 onClick={() => props.switchProject('project1')}>Momo The Wizard</h5>
              </section>
              <section className='projects_excerpt_container'>
                <p>Project 2</p>
              </section>
              <section className='projects_excerpt_container'>
                <p>Project 3</p>
              </section>
              <section className='projects_excerpt_container'>
                <p>Project 4</p>
              </section>
          </div>
        </div>
      )
    break
    case 'project1':
      return (
        <h1>
          Project 1 details
        </h1>
      )
    break
    default:
    break
  }
}

export default Projects
