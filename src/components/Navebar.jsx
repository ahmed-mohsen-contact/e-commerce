import React, { useContext, useState } from 'react'
import { assets } from './../assets/assets';
import { Link, NavLink } from 'react-router';
import { ShopContext } from '../context/ShopContext';

const Navebar = () => {
  const [visible, setVisible] = useState(false);
const {setShowSearch}= useContext(ShopContext)

    return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/' >
        <img src={assets.logo} className='w-36' alt="" />
        </Link>
        
        <ul className='hidden  sm:flex text-gray-700 gap-5 text-sm'>
            <NavLink to="/" className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to="/about" className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className="group relative">
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className=' cursor-pointer hover:text-black '>My profile</p>
                        <p className=' cursor-pointer hover:text-black '>Orders</p>
                        <p className=' cursor-pointer hover:text-black '>Logout</p>
                    </div>

                </div>
            </div>
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>12</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />
        </div>
        <div className={`absolute top-0 right-0 overflow-hidden h-full  bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'> 
                    <img src={assets.dropdown_icon} className='h-4 rotate-180 ' alt="" />
                    <p className='font-semibold'>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} to="/" className='p-4 border-t border-gray-200'>Home</NavLink>
                <NavLink onClick={() => setVisible(false)} to="/about" className='p-4 border-t border-gray-200'>About</NavLink>
                <NavLink onClick={() => setVisible(false)} to="/collection" className='p-4 border-t border-gray-200'>Collection</NavLink>
                <NavLink onClick={() => setVisible(false)} to="/contact" className='p-4 border-t border-gray-200'>Contact</NavLink>
            </div>
        </div>
        
    </div>
  )
}

export default Navebar
