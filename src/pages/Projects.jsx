import React from 'react'
import { MyProjects } from '../reuseables/MyProjects'
import { projects } from '../projectsdata'

const Projects = () => {
  return (
    <div className='main'>
      <MyProjects main={true} num={projects.length}/>
    </div>
  )
}

export default Projects