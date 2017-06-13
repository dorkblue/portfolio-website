import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'
import './App.css'
import './stars.css'

// import packages
import {BrowserRouter, Route} from 'react-router-dom'

// import components
import NavMain from './components/nav_bar/NavMain'
import HomeMain from './components/home/HomeMain'

// let options = {
//   // activeClass: 'active', // the class that is appended to the sections links
//   // anchors: [], // the anchors for each sections
//   arrowNavigation: true, // use arrow keys
//   className: 'SectionContainer', // the class name for the section container
//   delay: 1000, // the scroll animation speed
//   navigation: true, // use dots navigatio
//   scrollBar: false, // use the browser default scrollbar
//   sectionClassName: 'Section', // the section class name
//   sectionPaddingTop: '0', // the section top padding
//   sectionPaddingBottom: '0', // the section bottom padding
//   verticalAlign: false // align the content of each section vertical
// }

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    let options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar: false,
      navigation: true,
      // verticalAlign: true,
      // sectionPaddingTop: '50px',
      // sectionPaddingBottom: '50px',
      arrowNavigation: true,
      className: 'SectionContainer' // the class name for the section container
    }
    return (
      <div className='App'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <HomeMain />
        <footer>
          <section>
            <p>
              Build with React <i className='devicon-react-original-wordmark' />
            </p>
          </section>
          <section>
            <p>
              <Icon name='copyright' /> Lee Shue Ze
              </p>
          </section>
        </footer>
      </div>
    )
  }
}

export default App
