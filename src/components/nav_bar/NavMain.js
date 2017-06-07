import React from 'react'
import {Link} from 'react-router-dom'

import './NavMain.css'

class NavMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: null
    }
  }
  render () {
    return (
      <header>
        <nav id='main'>
          <ul>
            <li>
              <Link to='/works'>
                  works
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                  blog
              </Link>
            </li>
            <li>
              <Link to='/'>
                home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                  about
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                  contact
              </Link>
            </li>
          </ul>
            {/* <a href='#sectionOne'>Section One</a>
            <a href='#sectionTwo'>Section Two</a>
            <a href='#sectionThree'>Section Three</a>
            <a href='#sectionFour'>Section Four</a> */}
        </nav>
      </header>
    )
  }

}

export default NavMain
