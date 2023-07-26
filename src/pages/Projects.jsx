import React from 'react'
import { MyProjects } from '../reuseables/MyProjects'
import { projects } from '../projectsdata'

const Projects = () => {
  return (
    <div className='main'>
      <h1 className='sectionTitle'>My Projects</h1>
      <MyProjects main={true} num={projects.length}/>
    </div>
  )
}

export default Projects