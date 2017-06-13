import React from 'react'
import {SectionsContainer, Section} from 'react-fullpage'
import {Divider} from 'semantic-ui-react'

// import css file
import './HomeMain.css'
import './Hero.css'

// import sub components
import Hero from './Hero'
import Projects from './Projects'
import Profile from './Profile'
import Blurb from './Blurb'

class HomeMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProject: 'all',
      onHoverProject1: false,
      onHoverProject2: false,
      onHoverProject3: false,
      onHoverProject4: false,
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
    this.hoverProject = this.hoverProject.bind(this)
    this.hoverLeaveProject = this.hoverLeaveProject.bind(this)
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
    switch (name) {
      case 'all':
        this.setState({
          currentProject: name
        })
      break
      case 'project1':
        this.setState({
          currentProject: name,
          onHoverProject1: false
        })
      break
      case 'project2':
        this.setState({
          currentProject: name,
          onHoverProject2: false
        })
      break
      case 'project3':
        this.setState({
          currentProject: name,
          onHoverProject3: false
        })
      break
      case 'project4':
        this.setState({
          currentProject: name,
          onHoverProject4: false
        })
      break
    }
  }

  hoverProject (name) {
    switch (name) {
      case 'project1':
        this.setState({
          onHoverProject1: true
        })
      break
      case 'project2':
        this.setState({
          onHoverProject2: true
        })
      break
      case 'project3':
        this.setState({
          onHoverProject3: true
        })
      break
      case 'project4':
        this.setState({
          onHoverProject4: true
        })
      break

      default:
      break
    }
  }

  hoverLeaveProject (name) {
    switch (name) {
      case 'project1':
        this.setState({
          onHoverProject1: false
        })
      break
      case 'project2':
        this.setState({
          onHoverProject2: false
        })
      break
      case 'project3':
        this.setState({
          onHoverProject3: false
        })
      break
      case 'project4':
        this.setState({
          onHoverProject4: false
        })
      break
      default:
      break
    }
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
      <main>
        <Hero title={this.state.title[this.state.currentTitlePosition]} />
        <Divider className='divider' />
        <Projects
          currentProject={this.state.currentProject}
          switchProject={this.switchProject}
          hoverProject={this.hoverProject}
          hoverLeaveProject={this.hoverLeaveProject}
          onHoverProject1={this.state.onHoverProject1}
          onHoverProject2={this.state.onHoverProject2}
          onHoverProject3={this.state.onHoverProject3}
          onHoverProject4={this.state.onHoverProject4}
        />
        <Divider className='divider' />
        <Profile />
        <Divider className='divider' />
      </main>
    )
  }

}

export default HomeMain
