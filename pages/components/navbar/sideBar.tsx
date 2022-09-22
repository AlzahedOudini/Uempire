import React, { FC } from 'react';
import Link from 'next/link';
import {VscChromeClose} from 'react-icons/vsc';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

interface Props {
  myClick: () => void;
}

function SideBar(props: Props) {
  return (
    <div className='mySidebar'>
        <div className='closeIcon' >
            <VscChromeClose className='hover:text-[#FFB040] ' onClick={props.myClick}/>
        </div>

       <div className="content_side flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row 2xl:flex-row">
        <div className="boxMenu p-10">
            <ul className=' grid gap-3 lg:gap-5'>
                <Link href="/">
                  <li className=' text-2xl sm:text-4xl lg:text-4xl hover:text-[#FFB040] transition-all duration-700 cursor-pointer font-semibold '>Accueil</li>
                </Link>
                <Link href="/about">
                  <li className=' text-2xl sm:text-4xl lg:text-4xl hover:text-[#FFB040] transition-all duration-700 cursor-pointer font-semibold '>A Propos</li>
                </Link>
                <Link href="/services">
                  <li className=' text-2xl sm:text-4xl lg:text-4xl hover:text-[#FFB040] transition-all duration-700 cursor-pointer font-semibold '>Services</li>
                </Link>
                <Link href="/project">
                  <li className=' text-2xl sm:text-4xl lg:text-4xl hover:text-[#FFB040] transition-all duration-700 cursor-pointer font-semibold '>Projets</li>
                </Link>
                <Link href="/contact">
                  <li className=' text-2xl sm:text-4xl lg:text-4xl hover:text-[#FFB040] transition-all duration-700 cursor-pointer font-semibold '>Contact</li>
                </Link>
                
            </ul>
          </div>
          <div className="boxMedias p-10">
            <div className=" grid gap-3 mb-10">
              <h4 className=' text-gray-500'>Medias  sociaux</h4>
              <Link  href="https://github.com/michalsnik/aos"><p className='cursor-pointer hover:text-[#FFB040] transition-all duration-700'>Linkedin</p></Link>
              <Link  href="https://github.com/michalsnik/aos"><p className='cursor-pointer hover:text-[#FFB040] transition-all duration-700'>Twitter</p></Link>
              <Link  href="https://github.com/michalsnik/aos"><p className='cursor-pointer hover:text-[#FFB040] transition-all duration-700'>Facebook</p></Link>
            </div>
            <div className='grid gap-3 mt-4'>
              <h4 className=' text-gray-500'>Contactez-nous !</h4>
              <div className='flex items-center cursor-pointer hover:text-[#FFB040] transition-all duration-700'>
                <FaWhatsapp className='mr-2 '/> +1 514 974 1747
              </div>
              <div className='flex items-center cursor-pointer hover:text-[#FFB040] transition-all duration-700'>
                <MdOutlineEmail className='mr-2 '/> info@uempire.ca
              </div>
              
            </div>
          </div>
       </div>
    </div>
  )
}

export default SideBar;
