import React from 'react'
import hero from '../assets/Image Placeholder.png';
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Hero = () => {
    const loginBox = [
        {icon: CgProfile, type: "text", placeholder: "User Name"},
        {icon: MdOutlineEmail, type: "email", placeholder: "Email Address"},
        {icon: CiLock, type: "password", placeholder: "Password" },
        {icon: CiLock, type: "password", placeholder: "Confirm Password" },
    ]
  return (
    <>
    <div className='flex flex-col md:grid md:grid-cols-2 text-center items-center text-white'>
        <img src={hero} alt='hero' className='w-full h-[86vh]' />
        <div className=' md:flex md:flex-col px-8 py-10 items-start md:px-28'>
            <h3 className='mt-10 text-xl font-semibold leading-10'>Create Account</h3>
            <p className='text-sm text-center md:text-2xl leading-6 font-normal text-start py-4'>
                Wellcome! enter your details and start creating, collecting and selling NFTs.
            </p>
            {loginBox.map((items, i) => {
                return <div key={i} className='flex justify-center items-center mt-5 bg-white rounded-3xl px-5 py-3 md:pl-10 md:pr-16'>
                <span> {items.icon} </span>
                <input type={items.type} placeholder={items.placeholder} className='w-full rounded-3xl 
                px-4 outline-none placeholder:text-black text-black text-lg' />
            </div>
            })}
            <button className='flex justify-center w-full lg:w-[47vh] items-center mt-5 bg-white rounded-3xl 
            px-5 py-3 md:pl-10 md:pr-16 primiry-button'> Create Account </button>
        </div>
        
    </div>
    
    </>
  )
}

export default Hero