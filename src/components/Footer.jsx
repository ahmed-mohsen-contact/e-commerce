import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32 ' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam incidunt tempore atque vel minima quia, ratione cum voluptatum, accusamus accusantium delectus itaque nostrum animi laudantium velit quae doloribus fugiat.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>

            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>01279734467</li>
                <li>ahmed10mihsen74@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr className='text-gray-300' />
        <p className='text-center py-5 text-sm '>Copyright @2025 forever.com all right reserved</p>
      </div>
    </div>
  )
}

export default Footer
