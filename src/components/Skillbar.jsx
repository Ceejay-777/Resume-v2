import React from 'react'

const Skillbar = ({skills}) => {
  return (
    <div className="w-fit">
        {skills.map((skill, ID) => {
            return (
                <p className="px-6 py-1 rounded-2xl dark:bg-pri bg-gray-200" key={ID}>{skill}</p>
            )
        })}
    </div>
  )
}

export default Skillbar