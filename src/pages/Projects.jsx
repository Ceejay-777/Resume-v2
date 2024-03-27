import React from 'react'
import { MyProjects } from '../reuseables/MyProjects'
import { projects } from '../projectsdata'
import Header from '../reuseables/Header'

const Projects = () => {
  return (
    <div className='main dark:bg-pri transition-all duration-500'>
      <Header>Projects</Header>
      <MyProjects main={true} num={projects.length}/>
      <p className='text-center mb-10 dark:text-white'>
        Checkout all my frontendmentor projects at <a href="https://www.frontendmentor.io/profile/Ceejay-777" className='accent' target='_blank'>Frontend Mentor</a>
      </p>
    </div>
  )
  
}

export default Projects