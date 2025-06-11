import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setopen}) => {
  return (
    <div className='fixed top-0 w-full h-[60px] bg-black p-2 text-white'>
        <div className='flex justify-between items-center px-5'>
            <div className='flex'>
                <button onClick={()=>setopen(prev=>prev===false?true:false)} className='hidden md:block border-1 px-2 py-1 rounded-3xl mx-2'><i className="fa-solid fa-bars"></i></button>
               <Link to='/'><h1 className='text-white font-bold text-xl sm:text-3xl'><span className='text-red-600'>U</span>Tube</h1></Link>
            </div>
            <div>
                <div className='border-1 p-1 rounded-3xl md:w-[400px] flex justify-between pointer-event-auto'>
                    <input className='hidden sm:block border-0 outline-0 text-xl px-2 placeholder:text-white' type="text" placeholder='Search Here!'/>
                    <button className='px-1 text-xs md:text-xl md:px-2'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div>
                <button className='border-1 px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-plus"></i></button>
                <button className='border-1 px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-bell"></i></button>
                <button className='border-1 px-2 py-1 rounded-3xl mx-1 text-xs md:text-xl md:mx-2'><i className="fa-solid fa-user"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar