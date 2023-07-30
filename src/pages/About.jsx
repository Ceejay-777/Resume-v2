import React from 'react'
import { skillset } from '../data'
import MyImage from "../reuseables/MyImage";
import Skillbar from '../reuseables/Skillbar';



const About = () => {
  const skills = skillset.map((skill) => skill.skill)
  return (
    <div className='main'>
     <MyImage />
        <h1 className="sectionTitle">About Me</h1>
        <p className="aboutMe-info">
          Frontend Web developer | React developer | Python Enthusiast

          Hi there! 
        </p>
        <Skillbar skills={skills}/>

    </div>
  )
}
export default About
