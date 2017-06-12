import React from 'react'

const Profile = (props) => {
  return (
    <div className='content_container2'>
      <div className='content_header'>
        <h2>PROFILE</h2>
        <div className='content_subheader'>
          <h4>get to know me&nbsp;</h4>
        </div>
      </div>
      <div className='content_content profile_container'>
        <h1 className='whale'>
          <span></span>
          , what do we have here?
        </h1>
          <section id='profile_image'>

          </section>
          <section>
            Hi there! My name is Shue Ze (pronounce as shu-weh xur). I am an ex-engineer turned web developer.
            I appreciate things that are structurally well designed and find an affinity in web development, which offers the right balance of design and structure. I like to experiment and prefer a hands-on approach to create meaningful solutions. I am curious about new technology and passionate about getting better in what I do.
          </section>
          <section>
            All in all, I enjoy puns and video games.
            I play the ukulele, and my dream is to own a wild life conservation park.
            Hit me up for a conversation! I don't bite.
          </section>
      </div>
    </div>
  )
}

export default Profile
