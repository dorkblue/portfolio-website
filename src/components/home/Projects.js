import React from 'react'
import {Link} from 'react-router-dom'

import './Projects.css'

import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

const Projects = (props) => {
  console.log(props)
  switch (props.currentProject) {
    case 'all':
      return (
        <div className='content_container2'>
          <div className='content_header'>
            <h2>WORKS</h2>
            <div className='content_subheader'>
              <h4>that I'm proud of&nbsp;</h4>
            </div>
          </div>
          <div className='content_content projects_container'>
            <section
              className='projects_excerpt_container'
              id={props.onHoverProject1 ? 'project1Hover' : 'project1'}
              onClick={() => props.switchProject('project1')}
              onMouseEnter={() => props.hoverProject('project1')}
              onMouseLeave={() => props.hoverLeaveProject('project1')}
              >
              <h5>Momo The Wizard</h5>
            </section>
            <section
              className='projects_excerpt_container'
              id={props.onHoverProject2 ? 'project2Hover' : 'project2'}
              onClick={() => props.switchProject('project2')}
              onMouseEnter={() => props.hoverProject('project2')}
              onMouseLeave={() => props.hoverLeaveProject('project2')}
              >
              <h5><span id='awanlogo' />awan Database</h5>
            </section>
            <section
              className='projects_excerpt_container'
              id={props.onHoverProject3 ? 'project3Hover' : 'project3'}
              onClick={() => props.switchProject('project3')}
              onMouseEnter={() => props.hoverProject('project3')}
              onMouseLeave={() => props.hoverLeaveProject('project3')}
              >
              <h5><span id='whichcraftlogo' />WHICHCRAFT</h5>
            </section>
            <section
              className='projects_excerpt_container'
              id={props.onHoverProject4 ? 'project4Hover' : 'project4'}
              onClick={() => props.switchProject('project4')}
              onMouseEnter={() => props.hoverProject('project4')}
              onMouseLeave={() => props.hoverLeaveProject('project4')}
              >
              <h5>Bro-sure</h5>
            </section>
          </div>
        </div>
      )
      break
    case 'project1':
      return (
        <Project1
          switchProject={props.switchProject}

         />
      )
      break
    case 'project2':
      return (
        <Project2
          switchProject={props.switchProject}

         />
      )
      break
    case 'project3':
      return (
        <Project3
          switchProject={props.switchProject}

         />
      )
      break
    case 'project4':
      return (
        <h1>
          Project 4 details
        </h1>
      )
      break
    default:
      break
  }
}

export default Projects
