import React from 'react'
import {SectionsContainer, Section} from 'react-fullpage'

// import css file
import './HomeMain.css'
import './Hero.css'

// import sub components
import Hero from './Hero'
import Projects from './Projects'
import Profile from './Profile'

class HomeMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProject: 'all',
      currentTitlePosition: 0,
      title: [
        'FULL STACK WEB DEVELOPER',
        'UKULELE PLAYER',
        'ANIMAL ENTHUSIAST',
        'BASKETBALL PLAYER',
        'ASPIRING ARTIST'
      ]
    }
    this.switchProject = this.switchProject.bind(this)
    // this.seq = this.seq.bind(this)
  }

  // seq () {
  //   let arrLength = this.state.title.length
  //   let currentPos = this.state.currentTitlePosition
  //   if (currentPos === arrLength - 1) {
  //     this.setState({
  //       currentTitlePosition: 0
  //     })
  //   } else {
  //     this.setState({
  //       currentTitlePosition: currentPos + 1
  //     })
  //   }
  // }

  switchProject (name) {
    console.log(name)
    this.setState({
      currentProject: name
    })
  }

  render () {
    let options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar: false,
      navigation: true,
      verticalAlign: true,
      // sectionPaddingTop: '50px',
      // sectionPaddingBottom: '50px',
      arrowNavigation: true,
      className: 'SectionContainer' // the class name for the section container
    }

    return (
      <SectionsContainer className='container' {...options}>
        <Section className='section'>
          <Hero title={this.state.title[this.state.currentTitlePosition]} />
        </Section>
        <Section className='section'>
          <Projects
            currentProject={this.state.currentProject}
            switchProject={this.switchProject}
          />
        </Section>
        <Section className='section'>
          <Profile />
        </Section>
        <Section className='section'>
            Page 4
        </Section>
      </SectionsContainer>
    )
  }

}

export default HomeMain
