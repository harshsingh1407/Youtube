import React from 'react';
import tseries from '../assets/T-series-logo.svg.png';
import bbkivines from '../assets/bbkivines.png';
import nitishrajput from '../assets/nitishrajput.jpeg';
import setindia from '../assets/SET-LOGO-HD.png';

const Sidebar = ({ open, category, setcategory }) => {
  const handleClick = (id) => {
    console.log("Clicked category:", id); // Debug log
    setcategory(id);
  };

  return (
    <div className={`hidden md:block fixed left-0 top-[60px] bg-[#0f0f0f] h-[calc(100vh-60px)] text-white  ${open ? "w-[250px]" : "w-[80px]"}`}>
      <ul>
        <li onClick={() => handleClick(0)} className={`text-xl py-3 px-7 cursor-pointer hover:bg-gray-800 ${category===0?"bg-gray-800":""}`}>
          <i className="fa-solid fa-house"></i>
          <span className={`px-2 ${open ? "" : "hidden"}`}>Home</span>
        </li>
        <li onClick={() => handleClick(20)} className={`text-xl py-3 px-7 cursor-pointer hover:bg-gray-800 ${category===20?"bg-gray-800":""}`}>
          <i className="fa-solid fa-gamepad"></i>
          <span className={`px-2 ${open ? "" : "hidden"}`}>Gaming</span>
        </li>
        <li onClick={() => handleClick(25)} className={`text-xl py-3 px-7 cursor-pointer hover:bg-gray-800 ${category===25?"bg-gray-800":""}`}>
          <i className="fa-solid fa-newspaper"></i>
          <span className={`px-2 ${open ? "" : "hidden"}`}>News</span>
        </li>
        <li onClick={() => handleClick(10)} className={`text-xl py-3 px-7 cursor-pointer hover:bg-gray-800 ${category===10?"bg-gray-800":""}`}>
          <i className="fa-solid fa-music"></i>
          <span className={`px-2 ${open ? "" : "hidden"}`}>Music</span>
        </li>
        <li onClick={() => handleClick(17)} className={`text-xl py-3 px-7 cursor-pointer hover:bg-gray-800 ${category===17?"bg-gray-800":""}`}>
          <i className="fa-solid fa-medal"></i>
          <span className={`px-2 ${open ? "" : "hidden"}`}>Sports</span>
        </li>
      </ul>

      <hr className="mx-4 my-2 border-gray-600" />

      <ul>
        <li className="text-xl py-3 px-7 flex items-center gap-2 cursor-pointer hover:bg-gray-800">
          <img className="w-[20px] h-[25px]" src={tseries} alt="T-Series" />
          <span className={`${open ? "" : "hidden"}`}>T-Series</span>
        </li>
        <li className="text-xl py-3 px-7 flex items-center gap-2 cursor-pointer hover:bg-gray-800">
          <img className="w-[20px] h-[25px]" src={bbkivines} alt="BB Ki Vines" />
          <span className={`${open ? "" : "hidden"}`}>BB Ki Vines</span>
        </li>
        <li className="text-xl py-3 px-7 flex items-center gap-2 cursor-pointer hover:bg-gray-800">
          <img className="w-[20px] h-[25px]" src={nitishrajput} alt="Nitish Rajput" />
          <span className={`${open ? "" : "hidden"}`}>Nitish Rajput</span>
        </li>
        <li className="text-xl py-3 px-7 flex items-center gap-2 cursor-pointer hover:bg-gray-800">
          <img className="w-[20px] h-[25px]" src={setindia} alt="SET India" />
          <span className={`${open ? "" : "hidden"}`}>SET India</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
