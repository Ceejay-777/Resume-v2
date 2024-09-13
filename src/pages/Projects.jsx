import React from 'react'
import { MyProjects } from '../reuseables/AllProjects'
import Header from '../reuseables/Header'

const Projects = () => {
  return (
    <main className='main dark:bg-priFader transition-all duration-500'>
      <Header>Projects</Header>
      <MyProjects main={true}/>
      <p className='text-center mb-10 dark:text-white'>
        Checkout all my frontendmentor projects at <a href="https://www.frontendmentor.io/profile/Ceejay-777" className='accent' target='_blank'>Frontend Mentor</a>
      </p>
    </main>
  )
  
}

export default Projects