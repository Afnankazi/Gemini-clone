// eslint-disable-next-line no-unused-vars
import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='grid grid-cols-[1fr_60fr]' >
        <Sidebar/>
        <Main/>
      
    </div>
  )
}

export default Home
