import React from 'react'
import DateTime from './DateTime';

const Nav = () => {
  return (
    <nav className=' w-full text-white flex justify-between bg-[#1d1d1d63] backdrop-blur-[10px]'>
        <div className="left flex justify-center items-center gap-4 px-1.5 ">
            <div className="apple-icon">
                <img src="/public/icons/apple.svg" alt="" />
            </div>
            <div className="nav-item">
                <p className='font-sans text-sm'>Soham Ghadai</p>
            </div>
            <div className="nav-item">
                <p className='font-sans text-sm'>File</p>
            </div>
            <div className="nav-item">
                <p className='font-sans text-sm'>Window</p>
            </div>
            <div className="nav-item">
                <p className='font-sans text-sm'>Terminal</p>
            </div>
        </div>        
        <div className="right flex justify-center items-center gap-4 px-1.5 ">
            <div className="nav-icons">
                <img src="/public/icons/wifi.svg" alt="" />
            </div>
            <DateTime />
        </div>
    </nav>
  )
}

export default Nav;
