import React from 'react'
import About from '../side_components/About'
import Products from '../side_components/Products'
import Courses from '../side_components/Courses'
import Blogs from '../side_components/Blogs'

export default function Side() {
  return (
    <div className='lg:w-[35%] bg-white'>
      <About/>
      <Products/>
      <Courses/>
      <Blogs/>
    </div>
  )
}
