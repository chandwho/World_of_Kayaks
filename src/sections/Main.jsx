import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Services from '../components/Services'

export default function Main() {
  return (
    <div className='lg:w-[70%] bg-white my-12'>
        <NavBar/>
        <Hero/>
        <Locations/>
        <Services/>
    </div>
  )
}
