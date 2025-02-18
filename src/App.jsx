import React from 'react'
import Navbar from './pages/Navbar'
import LeftBar from './pages/CategorySidebar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className=' bg-[#22304a] w-full h-screen'>
      <Navbar/>
      <div className='flex gap-16'>
        <LeftBar />
        <Home />
      </div>
    </div>
  )
}

export default App