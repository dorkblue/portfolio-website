import React from 'react'
import {Icon, Popup} from 'semantic-ui-react'

import './Project.css'

const Project1 = (props) => {
  return (
    <div className='content_container'>
      <div className='back_button'>
        <Popup
          inverted
          trigger={
            <Icon onClick={() => props.switchProject('all')} style={{color: 'yellow'}} name='chevron left' size='huge' />
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
          <img src={require('./project1.gif')} />
        </div>
        <div className='project_content_container'>
          <section className='project_title' id='project_1_title'>
            <h5>Momo the Wizard</h5>
          </section>
          <section className='project_description'>
              <p>
                Inspired by Google Halloween 2016, <span>Momo</span> is a cat trying to learn the ins and outs of being an Auror after graduating from Magic Cat Academy. The game requires the player to assist Momo in defeating its evil self, <em>Evil Momo</em> by typing the correct counter spell. The spells are curated from the Harry Potter Universe.
              </p>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Project1
