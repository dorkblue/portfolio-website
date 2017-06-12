import React from 'react'
import {Icon, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import './Project.css'

const Project3 = (props) => {
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
          <img src={require('./project3.gif')} />
        </div>
        <div className='project_content_container'>
          <section className='project_title' id='project_3_title'>
            <h5><span id='whichcraftlogo' />WHICHCRAFT</h5>
          </section>
          <section className='project_description'>
            <p>
              envisions to be a centralized digital platform for skilled craftsmen to offer their services in the form of events/workshops to interested parties. The web app features

              <ul>
                <li>
                  <strong>Booking & payment system</strong>: for users to sign in, register and pay for workshop that they are interest in
                </li>
                <li>
                  <strong>Portfolio</strong>: personal portfolio page for the crafters to display their work of art
                </li>
                <li>
                  <strong>Search</strong>: lets user search for the workshop or crafter by category selection or manual input
                </li>
                <li>
                  <strong>Favourites</strong>: lets user save their favourite/liked workshop for reference
                </li>
              </ul>

              As part of the effort to increase user experience, we've minimized reloading of the page by utilizing Ajax for some of the app's funtionality, which includes Favourite, Search, Filter & et cetera.
            </p>
          </section>
          <section>
              <p>
                Built with: Ruby, Ruby on Rails, Postgresql, Stripe, Ajax
              </p>
          </section>
          <section className='link_container'>
            <a href='https://github.com/wdi-sg/wdi-project-3-the-dream-team'>
              <Icon style={{color: '#EBEAE5'}} name='github' size='large' />
              Github Repo
            </a>{' '}
            <a href='http://whichcraft.herokuapp.com'>
              <Icon style={{color: '#EBEAE5'}} name='computer' size='large' />
              Application
            </a>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Project3
