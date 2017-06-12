import React from 'react'
import {Icon, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import './Project.css'

const Project4 = (props) => {
  return (
    <div className='content_container'>
      <div className='back_button'>
        <Popup
          basic
          inverted
          trigger={
            <Icon onClick={() => props.switchProject('all')} style={{color: '#EBEAE5'}} name='backward' size='big' />
          }
          content='back to works'
          position='right center'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fontFamily: 'Rationale, sans-serif',
            fontSize: '2em',
            color: '#EBEAE5'
          }}
        />
      </div>
      <div className='content_container_right'>
        <div className='project_image'>
          <img src={require('./project4.gif')} />
        </div>
        <div className='project_content_container'>
          <section className='project_title' id='project_4_title'>
            <h5>Bro-sure</h5>
          </section>
          <section className='project_description'>
            <p>
              is a simple web app that allows Property Agents (or condo owners) to create e-brochure with personalised information of the condominium for sale. The design and user interface of Bro-sure is user experience focused. User can make changes immediately on the respective brochure, instead of relocating to the <em>edit</em> page. User can also pinpoint save the location geo-code using the Google Map provided.
            </p>
          </section>
          <section>
            <p>
              As an experiment to build independent front-end and back-end app, Bro-sure is build separate with <strong>React</strong> as the front-end library with Google <strong>Firebase</strong> Authentication & Storage, and Node.js (Express) as the back-end framework with Firebase Database. This decision is made in consideration of scalability in the future, IE: building a mobile app using React Native that connects to the same back-end.
            </p>
          </section>
          <section>
            <p>
              Built with: React, Semantic, Node.js, Express, Firebase Auth, Database & Storage
            </p>
          </section>
          <section className='link_container'>
            <a href='https://github.com/dorkblue/wdi-project-4-react-hexhex'>
              <Icon style={{color: '#EBEAE5'}} name='github' size='large' />
              Github Repo
            </a>{' '}
            <a href='https://bro-sure.herokuapp.com/'>
              <Icon style={{color: '#EBEAE5'}} name='computer' size='large' />
              Application
            </a>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Project4
