import React from 'react'
import {Icon} from 'semantic-ui-react'

import './Project.css'

const Project1 = (props) => {
  return (
    <div className='content_container'>
      <div className='back_button'>
        <a onClick={() => props.switchProject('all')} ><Icon linkstyle={{color: '#EBEAE5'}} name='backward' size='large' />All Works</a>
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
          <section>
            <p>
              The game starts with Easy mode to ease the player in. At the end of each session, player gets to choose higher difficulties to challenge themselves. At higher difficulties, the time player has <em>(indicated above the input bar)</em> to type the counter spell becomes shorter.
            </p>
          </section>
          <section>
              <p>
                Built with: HTML, CSS, Javascript, Jquery
              </p>
          </section>
          <section className='link_container'>
            <a href='https://github.com/dorkblue/wdi-project-1-dorkblue'>
              <Icon style={{color: '#EBEAE5'}} name='github' size='large' />
              Github Repo
            </a>{' '}
            <a href='https://dorkblue.github.io/wdi-project-1-dorkblue/'>
              <Icon style={{color: '#EBEAE5'}} name='game' size='large' />
              Application
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Project1
