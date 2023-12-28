import React from 'react'
import { PiStorefront, PiYoutubeLogo } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  
    const footerName = [
        {name: "Marketplace", link: "#market"},
        {name: "Ranking", link: "#ranking"},
        {name: "Connect a wallet", link: "connect"}
    ]
    return (
    <div className='px-10 py-3'>
    <div className='flex'>
        <div className='py-10 px-8 lg:grid lg:grid-cols-3 lg:px-36 justify-center items-center'>
            <div className=''>
                <h3 className='text-xl lg:text-2xl text-white font-semibold flex items-center  '> 
                    <span className='text-color pr-5'> <PiStorefront size={25} /> </span> 
                    NFT MArketplace </h3>
                <p className='text-sm font-normal leading-6 mt-5 text-white'>
                    NFT Marketplace UI created with anima for figma.
                </p>
                <p className='text-lg font-normal leading-6 mt-5 text-white'>
                    Join our community
                </p>
                <div className='mt-4 flex gap-4'>
                    <RxDiscordLogo size={32} className='text-color cursor-pointer' />
                    <PiYoutubeLogo size={32} className='text-color cursor-pointer' />
                    <FiTwitter size={32} className='text-color cursor-pointer' />
                    <FaInstagram size={32} className='text-color cursor-pointer' />
                </div>
            </div>
            <div className='mt-4 lg:mt-0 lg:items-center justify-center'>
                <h3 className='text-xl text-white font-semibold py-4'>Explore</h3>
                {footerName.map((items, i) => {
                    return <p key={i} className='text-white py-2 text-sm cursor-pointer'> {items.name} </p>
                })}
            </div>
            <div className='mt-4 lg:mt-0'>
                <h3 className='capitalize text-xl font-semibold py-4 text-white'> Join our weekly Digest </h3>
                <p className='text-sm font-normal leading-6 mt-5 text-white'>
                    Get exclusive promotions & updates straight to your inbox.
                </p>
                <div className='flex md:hidden justify-center items-center mt-5 bg-white rounded-3xl px-5 py-3 md:pl-10 md:pr-16'>
                    <input type='text' placeholder='Enter your email here' className='w-full rounded-3xl 
                        px-4 outline-none placeholder:text-black text-black text-lg' />
                </div>
                <div className='hidden md:flex mt-5 bg-white rounded-3xl  '>
                    <input type='text' placeholder='Enter your email right here' className='w-full rounded-3xl 
                        px-4 outline-none placeholder:text-black text-black text-lg' />
                    
                    <button className='primiry-button w-full flex justify-center gap-2 text-lg items-center text-white
                        py-4 rounded-3xl font-semibold'> 
                    <span> <CiMail size={25} />  </span> Subscribe </button>
                </div>
                <button className='primiry-button md:hidden w-full flex justify-center gap-2 text-lg items-center text-white
                    py-4 rounded-3xl mt-5 font-semibold'> 
                    <span> <CiMail size={25} />  </span> Subscribe </button>
                </div>
                
            </div>
            
        </div>
        <hr  className='mt-10'/>
        <p className='flex items-center mt-5 text-white gap-3 text-lg font-normal'> 
        <FaRegCopyright size={25} /> NFT Market. Use this template freely </p>
        </div>
  )
}

export default Footer