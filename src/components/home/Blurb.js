import React from 'react'
import {Link} from 'react-router-dom'

const Blurb = (props) => {
  return (
    <div className='content_container'>
      <div className='content_header'>
        <h2><mark>Shue Ze</mark> is a<br /><span>FULL STACK<br />WEB DEVELOPER</span></h2>
        <h2></h2>
        <Link to='/about'>more about me</Link>
      </div>
      <div className='content_content'>
        <section className='section_top'>
          <div className='content_subheader'>
            <h3>skills unlocked</h3>
          </div>
          <div className='devicons-container-top'>
            <div className='devicons-container'>
              <i style={{color: '#F0DB4F'}} className='devicon-javascript-plain colored devicon' />
              <i style={{color: '#E54D26'}} className='devicon-html5-plain colored devicon' />
              <i style={{color: '#3D8FC6'}} className='devicon-css3-plain colored devicon' />
              <i style={{color: '#5A8356'}} className='devicon-nodejs-plain colored devicon' />
              <i style={{color: '#00D8FF'}} className='devicon-react-original colored colored devicon' />
            </div>
            <div className='devicons-container'>
              <i style={{color: '#D91404'}} className='devicon-ruby-plain colored devicon' />
              <i style={{color: '#CC0000'}} className='devicon-rails-plain colored colored devicon' />
              <i style={{color: '#0093C3'}} className='devicon-postgresql-plain colored devicon' />
              <i style={{color: '#52AB4C'}} className='devicon-mongodb-plain colored devicon' />
              <i style={{color: '#78CFF5'}} className='devicon-jquery-plain colored devicon' />
            </div>
          </div>
        </section>

        <section className='section_bot'>
          <div className='content_subheader'>
            <h3>skills pending</h3>
          </div>
          <div className='devicons-container-bot'>
            <div className='devicons-container'>
              <i className='devicon-photoshop-plain colored devicon' />
              <i className='devicon-illustrator-plain colored devicon' />
              <i className='devicon-sass-original colored devicon' />
              <i className='devicon-python-plain colored devicon' />
              <i className='devicon-vuejs-plain colored devicon' />
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Blurb
