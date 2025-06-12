import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setopen}) => {
  return (
    <div className='fixed top-0 w-full h-[60px] bg-[#0f0f0f] p-2 text-white z-40'>
        <div className='flex justify-between items-center px-5'>
            <div className='flex'>
                <button onClick={()=>setopen(prev=>prev===false?true:false)} className='hidden md:block bg-[#272727] text-white px-2 py-1 text-xl rounded-full mx-2'><i className="fa-solid fa-bars"></i></button>
               <Link to='/'><h1 className='text-white font-bold text-xl sm:text-3xl'><span className='text-red-600'>U</span>Tube</h1></Link>
            </div>
            <div>
                <div className='h-[45px] border-3 border-[#272727]  rounded-full md:w-[400px] flex justify-between pointer-event-auto'>
                    <input className='hidden sm:block border-0 outline-0 text-xl px-2 placeholder:text-white' type="text" placeholder='Search Here!'/>
                    <button className='rounded-full sm:rounded-r-full bg-[#272727] px-3 text-xs md:text-xl md:px-4'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div>
                <button className='bg-red-600 px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-plus"></i></button>
                <button className='bg-white text-black px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-bell"></i></button>
                <button className='bg-white text-black px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-user"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar