import React from 'react'

import {Icon} from 'semantic-ui-react'

import './Profile.css'

const Profile = (props) => {
  return (
    <div className='content_container2'>
      <div className='content_header'>
        <h2>PROFILE</h2>
        <div className='content_subheader'>
          <h4>get to know me&nbsp;</h4>
        </div>
      </div>
      <div className='content_content profile_container'>
        <div id='profile_image'>

        </div>
        <div id='profile_description'>
          <section id='profile_description_header'>
            <h2>
              Hi there! Shue Ze here.
            </h2>
          </section>
          <section>
            <p>
              I am an ex-engineer turned web developer.
              <br />
              <br />
              I appreciate things that are structurally well designed and find an affinity in web development, which offers the right balance of design and structure.
            </p>
          </section>
          <section>
            <p>
              I like to experiment and prefer a hands-on approach to create meaningful solutions. I am curious about new technology and passionate about getting better in what I do.
              <br />
              <br />
              All in all, I enjoy puns and video games.
              I play the ukulele, and my dream is to own a wild life conservation park.
            </p>
          </section>
          <div>
            <p>
              Hit me up for a conversation! I don't bite.
            </p>
            <section className='link_container'>
              <a href='mailto:shueze@gmail.com'><Icon name='mail outline' size='large' /></a>
              <a href='https://www.linkedin.com/in/shueze/'><Icon name='linkedin' size='large' /></a>
              <a href='https://github.com/dorkblue'><Icon name='github' size='large' /></a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
