import React, {useState} from 'react';
import membership from "./assets/membership.svg"
import {FaUsers, FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { Box, Button, Checkbox, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { BsShop } from 'react-icons/bs';
import Image from 'next/image';
import victor from './assets/victor.jpg';
import { TbTruckDelivery, TbWorld } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import mockLogin from './assets/muck/mockLogin.svg';
import mockHome from './assets/muck/mockHome.svg';
import mockPanier from './assets/muck/mockPanier.svg';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import groupp from './assets/groupp.svg';
import myUfood from './assets/logo/myUfood.svg';
import FooterRed from './components/footer/footerRed';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

function Partner() {
    const [isHideIcon, setisHideIcon] = useState(true);
    const countryClick = () => setisHideIcon (!isHideIcon);
  return (
    <div>
        <nav className=' p-4 px-8 flex justify-between bg-[#F60D2B] lg:px-32 '>
            <h1 className='text-[#ffffff] font-bold text-3xl '>Partenaire.</h1>
            {/* <Image
                src={myUfood}
                alt='/'
                width='100'
                height='100'
                priority
                className='immmg'
            /> */}
            <div className=' cursor-pointer flex justify-center items-center'  onClick={countryClick}>
                {isHideIcon ? 
                    (
                        <div className='flex gap-[4px] justify-center items-center'>
                            <TbWorld className='text-white'/>
                            <p className='text-white'>FR</p>
                        </div>
                    ):
                    (
                        <div className='flex gap-[4px] justify-center items-center'>
                            <TbWorld className='text-white'/>
                            <p className='text-white'>EN</p>
                        </div>
                    )
                }
                    
            </div>
        </nav>
        <section className="bg-[url('https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=900&t=st=1663959889~exp=1663960489~hmac=e71108d438abffb0c80fc44a8eb49015b63d20afcb7c084520dd20dee36e88e1')] w-full h-[40vh] sm:h-[30vh]  bg-cover bg-no-repeat bg-center sm:min-h-[30vh] md:min-h-[50vh] lg:min-h-[80vh] relative">
            <div className=' bg-black z-10 opacity-30  h-full'></div>
            
            
        </section>
        
    </div>
  )
}

export default Partner;
