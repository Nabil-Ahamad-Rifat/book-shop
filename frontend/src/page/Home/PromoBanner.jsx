import React from 'react'
import { Link } from 'react-router-dom'
import Bookpic from "../../assets/awardbooks.png"

function PromoBanner() {
  return (
    <div className='mt-16 py-16 bg-teal-100 px-4 lg:px-24'>
        
        <div className='  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2 items-center'>
                <h2 className='text-4xl capitalize font-bold  mb-6 leading-snug '>2023 National Book Award for Fictional shortlist </h2>
                 <Link to="/shop"className='block '><button className="items-center bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">Get Promo Code</button></Link>
            </div>
            <div>
                <img src={Bookpic} alt="award"className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner