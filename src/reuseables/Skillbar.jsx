import React from 'react'
import { skillset } from '../data'

const Skillbar = ({skills}) => {
  return (
    <div className="skillbar">
        {skills.map((skill, ID) => {
            return (
                <p className="tag" key={ID}>{skill}</p>
            )
        })}
    </div>
  )
}

export default Skillbar