/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';
import mocks from './assets/mock.svg';
import FooterOther from './components/footer/footerOther';
import Link from 'next/link';
import FooterRed from './components/footer/footerRed';
import groupp from './assets/groupp.svg';


function InscriptionRestaurant() {
  return (
    <div>
        <div className='px-32 py-8 bg-white text-[#707070] flex  items-center gap-1'>
            <Link href="/restaurant"><a>Restaurant</a></Link>
            <p>/ Inscription</p>
        </div>
        <section className='w-full bg-[#ffffff] text-[#181818] relative px-32 py-16'>
            <div className=' p-4 bg-[#e7e7e7] rounded-lg'>
                <h1 className='my-4 text-4xl font-semibold text-center'>Inscription</h1>
                <div className="content-form flex justify-center ">
                    <form className='bg-red w-[70%]  mt-10 shadow-primary' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
                        <div className='grid lg:grid-cols-2  gap-3'>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Nom du restaurant*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Nom Restaurant'  type="text" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Adresse du restaurant*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Adresse Restaurant'  type="text" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Nom*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Nom'  type="text" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Prenom*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Prenom'  type="text" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Téléphone*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Téléphone'  type="phone" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Email*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Email'  type="email" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Pays*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Pays'  type="text" />                        </label>
                            </div>
                            <div>
                                <label htmlFor="" className='block w-full'>
                                <p>Ville*</p>
                                <input className='form-control bg-[#eeeeee] w-full p-4 rounded-lg outline-none' name='user_firstname' placeholder='Ville'  type="text" />                        </label>
                            </div>
                            
                            
                           </div>
                        <div className='w-full flex justify-center items-center'>
                            <button className='text-center px-8 py-6 gap-4 text-[#252036] hover:bg-[#252036] transition-all hover:text-[#ffffff] border border-[#252036] rounded-md mt-4 ' type='submit'>Envouye le message</button>

                        </div>
                    </form>
                </div>
                
            </div>
        </section>

        <section className='px-32 py-16 bg-[#ffffff] relative'>
            <div className=" bg-[#F60D2B] p-20 rounded-3xl flex h-[60vh]">
                <div className='flex justify-center flex-col'>
                    <h1 className='text-4xl font-bold text-white'>Téléchargez l’application <br /> maintenant!</h1>
                    <div className='flex gap-4 mt-8'>
                        
                        <div className=" flex px-4 py-4 gap-4 bg-[#ffffff] text-[#181818] rounded-md items-center justify-center  w-[16rem] cursor-pointer">
                            <div className=''><FaGooglePlay className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>Google Play</p>
                            </div>
                        </div>
                        <div className=" flex px-4 py-4 gap-4 bg-[#ffffff] text-[#181818] rounded-md items-center justify-center  w-[16rem] cursor-pointer">
                            <div className=''><AiFillApple className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>App store</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className=' absolute z-50 left-[55%] top-[2rem] '>
                    <Image
                    src={groupp}
                    alt='/'
                    width='500'
                    height='500'
                    priority
                    className='   absolute'
                    />
            </div>
        </section>
        <FooterRed/>
    </div>
  )
}

export default InscriptionRestaurant;
