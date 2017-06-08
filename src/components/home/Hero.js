import React from 'react'
import {Link} from 'react-router-dom'

const Blurb2 = (props) => {
  return (
    <div className='content_container'>
      <div className='hero'>
        <h2><mark>Shue Ze</mark> is a<br /><span>{props.title}</span></h2>
      </div>
    </div>
  )
}

export default Blurb2
