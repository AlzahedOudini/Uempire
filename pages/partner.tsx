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
        <section className=' sm:py-16 bg-[#fafafa] '>
            <div className='lg:w-[70%] lg:mt-[-2rem] text-center lg:text-left  px-8 py-8 lg:px-32 lg:py-12'>
                <h1 className='text-4xl font-bold text-[#181818] mb-4'><strong className='text-[#F60D2B]'>Commandez</strong> et faites vous <strong className='text-[#F60D2B]'>livrer</strong> avec UFood. </h1>
                <p className='text-[#181818] '>Vos menus préférés du restaurant à votre porte en un fraction de seconde !</p>
            </div>
        </section>
        <section className='flex justify-center items-center py-8 md:p-0 bg-[#fafafa]'>
            <div className='w-[60vh] px-8 py-8 lg:top-[3%] lg:right-32  lg:min-w-[60vh]  lg:w-[60vh] shadow-lg rounded-xl bg-white lg:absolute'>
                <h1 className='text-2xl font-bold text-[#181818] my-2 text-center'>Rejoignez-nous maintenant !</h1>
                <form className='bg-red w-full  mt-6 shadow-primary' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
                    <div className=''>
                        
                        <div className='mb-4'>
                            <Input placeholder='Prénom' size='lg' focusBorderColor='#efedea'/> 
                        </div>
                        <div className='mb-4'>
                            <Input placeholder='Nom' size='lg' focusBorderColor='#efedea'/>   
                        </div>
                        <div className='mb-4'>
                        <div className='mb-4'>
                            <Input placeholder='Nom du restaurant' size='lg' focusBorderColor='#efedea'/> 
                        </div>
                        <InputGroup>
                            <Input type='tel' size='lg' placeholder='Phone number' focusBorderColor='#efedea'/>
                        </InputGroup>
                        </div>
                        <div className='mb-4'>
                            <Input placeholder='Email' size='lg' focusBorderColor='#efedea'/>
                        </div>
                        <div className='mb-4'>
                            <Input placeholder='Pays' size='lg' focusBorderColor='#efedea'/>
                        </div>
                        <div className='mb-6'>
                            <Select placeholder='Ville' size='lg' focusBorderColor='#efedea' >
                                <option value='option1'>Douala</option>
                                <option value='option2'>Yaoundé</option>
                                <option value='option3'>Bafoussam</option>
                            </Select>
                        </div>
                        <div className='mb-4'>
                            <Input placeholder='Quartier' size='lg' focusBorderColor='#efedea'/> 
                        </div>
                        <div className='flex gap-2 items-start '>
                            <Checkbox colorScheme='red' size='lg' className='mt-1'></Checkbox>
                            <p className='text-[14px] '>J&apos;accepte les conditions d&apos;utilisation et le faite 
                                que mes données peuvent être utilisées à des fins publicitaires</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center mt-4'>
                        <button className='w-full text-center px-8 py-4 gap-4 text-[#ffffff] bg-[#F60D2B]  hover:bg-transparent transition-all hover:text-[#F60D2B] border border-[#F60D2B] rounded-md mt-4 ' type='submit'>Rejoignez-nous maintenant!</button>

                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Partner;
