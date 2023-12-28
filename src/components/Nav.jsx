import React, { useState } from 'react'
import { PiStorefront } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import {FaTimes} from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Nav = () => {

  const [toggle, setToggle] = useState(false);
  const navLinks =[
    {name: "Marketplace", link: "#marketplace"},
    {name: "Ranking", link : "#Ranking"},
    {name: "Contact a wallet", link: "#contact"},
    {name: "Sign Up", link: "#signup", icon: CgProfile ,style: "text-sm flex items-center py-3 primiry-button px-8 rounded-3xl"}
  ]
  return (
    <div className='bg-[#2B2B2B]'>
      <div className='flex justify-between items-center text-white'>
        <h3 className='text-2xl flex items-center ml-12 mt-8 mb-8 '> 
          <span className='px-4 text-color'> <PiStorefront size={32} /> </span> 
          NFT MArketplace </h3>
        <div className=' hidden lg:flex justify-center items-center gap-3 mr-12'>
          {navLinks.map((items, i) => {
            return <h3 key={i} className={`text-lg font-semibold leading-4 cursor-pointer ${items.style}`}> {items.name} </h3>
          })}
        </div>
        <div onClick={() => {setToggle(!toggle)}} className='lg:hidden flex z-20 cursor-pointer text-white mr-12 text-color'>
          { toggle ? <FaTimes size={30}/> : <CiMenuFries size={30} /> }
      </div>
      {
        toggle && (
          <div className='z-10 flex flex-col text-white justify-center items-center absolute
          top-0 left-0 w-full h-screen bg-[#2B2B2B]'>
          {navLinks.map((items, i) => {
            return <div>
                <h3 key={i} className={`cursor-pointer capitalize text-2xl px-4 py-3 ${items.style}`}> {items.name} </h3>
            </div>
          })}
        </div>
        )
      }
      
      </div>
      
    </div>
  )
}

export default Nav