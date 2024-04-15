import React from 'react'
import Header from '../../reuseables/Header'
import { useNavigate } from 'react-router'

const SectionAbout = () => {
  const navigate = useNavigate()
  return (
    <section className='bg-gray-300 dark:bg-priFade transition-all duration-500'>
        <div className='max-w-[1024px] py-8 mx-auto'>
          <Header>About</Header>
          <p className='text-center dark:text-white'>I've got a page for all that</p>
          <div className=' dark:text-white py-1 px-3 bg-sec rounded-2xl w-fit mx-auto mt-8 font-semibold hover:scale-110' onClick={() => navigate("/about")}>Click Me</div>
        </div>
    </section>
  )
}

export default SectionAbout
