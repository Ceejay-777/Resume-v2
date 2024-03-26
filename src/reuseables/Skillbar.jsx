import React from 'react'

const Skillbar = ({skills}) => {
  return (
    <div className="skillbar">
        {skills.map((skill, ID) => {
            return (
                <p className="px-6 py-1 rounded-2xl dark:bg-priFader bg-gray-200" key={ID}>{skill}</p>
            )
        })}
    </div>
  )
}

export default Skillbar