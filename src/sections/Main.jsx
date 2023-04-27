import React from 'react'
import NavBar from '../main_components/NavBar'
import Hero from '../main_components/Hero'
import Locations from '../main_components/Locations'
import Services from '../main_components/Services'

export default function Main() {
  return (
    <div className='lg:w-[63%] bg-white my-12'>
        <NavBar/>
        <Hero/>
        <Locations/>
        <Services/>
    </div>
  )
}
