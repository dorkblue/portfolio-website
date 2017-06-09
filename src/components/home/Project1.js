import React from 'react'

const Project1 = (props) => {
  return (
    <div className='content_container'>
      <h1>Project 1</h1>
      <button onClick={() => props.switchProject('all')}>Back</button>
    </div>
  )
}

export default Project1
