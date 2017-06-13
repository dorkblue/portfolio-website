import React from 'react'
import {Icon, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import './Project.css'

const Project2 = (props) => {
  return (
    <div className='content_container'>
      <div className='back_button'>
        <a onClick={() => props.switchProject('all')} ><Icon linkstyle={{color: '#EBEAE5'}} name='backward' size='large' />All Works</a>
      </div>
      <div className='content_container_right'>
        <div className='project_image'>
          <img src={require('./project2.gif')} />
        </div>
        <div className='project_content_container'>
          <section className='project_title' id='project_2_title'>
            <h5><span id='awanlogo' />awan Database</h5>
          </section>
          <section className='project_description'>
            <p>
              Fueled by my hatred for medical appointment card issued by some clinics, this web app is a patient database system that aims to increase productivity of small scale clinics that are still using paper filing system. awan is lightweight, and has all the essential functionality required by most neighbourhood clinic to operate as per normal, with increased efficiency.
            </p>
          </section>
          <section>
            <p>
              awan features a robust search that allows user to search for patient based on their first or last name.<br /><br />
              Login with the following to test out the feature on the user side.<br /><br />
              username: <strong>demo</strong><br />
              password: <strong>12341234</strong>
            </p>
          </section>
          <section>
              <p>
                Built with: Node.js, Express, Mongodb, JqueryUI
              </p>
          </section>
          <section className='link_container'>
            <a href='https://github.com/dorkblue/wdi-project-2-dorkblue'>
              <Icon style={{color: '#EBEAE5'}} name='github' size='large' />
              Github Repo
            </a>{' '}
            <a href='https://awan-database.herokuapp.com/'>
              <Icon style={{color: '#EBEAE5'}} name='computer' size='large' />
              Application
            </a>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Project2
