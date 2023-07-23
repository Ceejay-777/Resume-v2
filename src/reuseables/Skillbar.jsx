import React from 'react'
import { skillset } from '../data'

const Skillbar = () => {
  return (
    <div className="skillbar">
        {skillset.map((skill) => {
            return (
                <p className="tag">{skill.skill}</p>
            )
        })}
    </div>
  )
}

export default Skillbar