import React from 'react'
import user from '../assets/Icons/user.svg'
import Socials from '../reuseables/socials'


const Home = () => {
  return (
    <>
      {/* <SectionIntro /> */}
      <SectionExperience />
    </>
  )
}

const SectionIntro = () => {
  return (
    <div>
    <section className='main-intro'>
      <div className="my-img-container">
        <img src={user} alt="user" className='my-img'/>
      </div>

      <div className='my-intro'>
        <p>Hello There!</p>
        <h1>I'm covenant</h1>
        <h3>I'm a web developer</h3>
        <Socials />
      </div>
    </section>
  </div>
  )
}

const SectionExperience = () => {
  return (
    <div>Experience</div>
  )
}

export default Home