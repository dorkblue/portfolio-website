import React from 'react'
import {SectionsContainer, Section} from 'react-fullpage'

import './HomeMain.css'

// import sub components
import Blurb from './Blurb'
import Projects from './Projects'

class HomeMain extends React.Component {

  render() {
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
            <Blurb />
          </Section>
          <Section className='section'>
            <Projects />
          </Section>
          <Section className='section'>
            Page 3
          </Section>
          <Section className='section'>
            Page 4
          </Section>
        </SectionsContainer>
    )
  }

}

export default HomeMain
