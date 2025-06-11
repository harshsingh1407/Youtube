import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/Video'

const App = () => {

  const [open, setopen] = useState(true)

  return (
    <div>
      <Navbar setopen={setopen}/>
      {/* <Sidebar open={open}/> */}
      <Routes>
        <Route path='/' element={<Home open={open}/>}/>
        <Route path='/video/:categoryID/:videoID' element={<Video/>}/>
      </Routes>
      {/* <Home open={open}/> */}
    </div>
  )
}

export default App