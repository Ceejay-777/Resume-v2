import React from 'react'
import { MyProjects } from '../reuseables/MyProjects'
import { projects } from '../projectsdata'

const Projects = () => {
  return (
    <div className='main'>
      <h1 className='sectionTitle'>My Projects</h1>
      <MyProjects main={true} num={projects.length}/>
      <p className='checkout'>
        Checkout all my frontendmentor projects at <a href="https://www.frontendmentor.io/profile/Ceejay-777" className='accent' target='_blank'>Frontend Mentor</a>
      </p>
    </div>
  )
  
}

export default Projects