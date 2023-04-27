import React from 'react'
import Main from './sections/Main'
import Side from './sections/Side'

export default function App() {
  return (
    <div className='flex flex-col lg:flex-row px-10 gap-7'>
      <Main/>
      <Side/>
    </div>
  )
}
