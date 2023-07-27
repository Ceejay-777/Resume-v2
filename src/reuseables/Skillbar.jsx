import React from 'react'
import { skillset } from '../data'

const Skillbar = ({skills}) => {
  return (
    <div className="skillbar">
        {skills.map((skill) => {
            return (
                <p className="tag">{skill}</p>
            )
        })}
    </div>
  )
}

export default Skillbar