import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

const Home = ({open}) => {

    const [category, setcategory] = useState(0)

  return (
    <div className='flex'>
        <Sidebar open={open} category={category} setcategory={setcategory}/>
        <div className={`flex-1 mt-[70px] ${open ? "md:ml-[260px]" : "md:ml-[90px]"}`}>
            <Feed category={category} open={open}/>
        </div>
    </div>
  )
}

export default Home