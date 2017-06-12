import React, { Component } from 'react'
import './App.css'
import './stars.css'

// import packages
import {BrowserRouter, Route} from 'react-router-dom'
import {SectionsContainer, Section} from 'react-fullpage'

// import components
import NavMain from './components/nav_bar/NavMain'
import HomeMain from './components/home/HomeMain'
import WorksMain from './components/content_segment/works/WorksMain'
import AboutMain from './components/content_segment/about/AboutMain'
import ContactMain from './components/content_segment/contact/ContactMain'

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
      <BrowserRouter>
        <div className='App'>
          <NavMain />
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
              <Route exact path='/' component={HomeMain} />
              <Route exact path='/works' component={WorksMain} />
              <Route exact path='/about' component={AboutMain} />
              <Route exact path='/contact' component={WorksMain} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
