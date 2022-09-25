import React from 'react';
import hands from './assets/hands.svg'
import ufood from './assets/ufood_hands.svg';
import logoufood from './assets/logoufood.svg';
import groupp from './assets/groupp.svg';
import victor from './assets/victor.jpg';
import mockLogin from './assets/muck/mockLogin.svg';
import mockHome from './assets/muck/mockHome.svg';
import mockPanier from './assets/muck/mockPanier.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BsClockHistory } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import FooterOther from './components/footer/footerOther';
import FooterRed from './components/footer/footerRed';


function Restaurant() {
  return (
    <div>
        <section className=' deliver h-[86vh] w-full bg-[#ffffff] grid  gap-4 grid-cols-2'>
            <div className="bloc1 pl-32 pt-8">
                <Image
                    src={logoufood}
                    alt='/'
                    width='120'
                    height='120'
                    priority
                />
                <h1 className='text-5xl font-semibold text-[#F60D2B] my-8'>Commandez avec <strong className='text-[#F60D2B]'>Ufood</strong></h1>
                <h4 className='text-2xl font-semibold mb-4 text-[#181818]'>Un partenariat de confiance qui tient ses promesses.</h4>
                <p className='text-[#181818]'>Vos menus préférés du restaurant à votre porte en un fraction de seconde
                </p>
                {/* <div className='py-6'>
                    <Link href="/inscriptionDeliver"><button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] rounded-md hover:bg-transparent border-2 border-[#252036] hover:text-[#181818] transition-all duration-300'>Postulez dès maintenant</button> </Link>
                </div> */}
                <p className='uppercase mt-6 mb-4 font-medium text-sm text-[#a9abb2]'>VILLES POPULAIRES AU camereroun</p>
                <div className="cities flex gap-4 ">
                    <div className='px-4 py-2 bg-[#F60D2B] text-white rounded-full w-[8rem] flex justify-center items-center'>Moncton</div>
                    <div className='px-4 py-2 bg-[#F60D2B] rounded-full text-white w-[8rem] flex justify-center items-center'>Douala</div>
                    <div className='px-4 py-2 bg-[#F60D2B] rounded-full text-white w-[8rem] flex justify-center items-center'>Yaoundé</div>
                </div>
            </div>
            <div className=" bg-[#F60D2B]  relative">
                <Image
                    src={ufood}
                    alt='/'
                    layout="fill"
                    priority
                />
            </div>
        </section>
        <section className='px-32 py-16 bg-[#ffffff]'>
            <div className='flex justify-center items-center w-full'>
            <h1 className='mb-8 text-4xl w-[70%] font-semibold text-center text-[#181818]'>UFood est votre porte d&apos;entrée pour gérer votre <strong className='text-[#F60D2B]'>activité </strong> de <strong className='text-[#F60D2B]'>livraison.</strong></h1>

            </div>
            <div className="w-full  text-white relative  grid  gap-4 grid-cols-3 ">
                 <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
               
                    {/* <div>
                        <BsClockHistory/>
                    </div> */}
                    <h1 className='my-4  text-2xl font-semibold'>Apportez des changements à votre entreprise selon votre propre calendrier.</h1>
                    <p>Modifiez votre menu, changez vos horaires, ajoutez des promotions et obtenez de l&apos;aide à chaque fois que vous en avez besoin - tout cela en un seul clic.</p>
                
                </div>
                <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <h1 className='my-4 text-2xl font-semibold'>Gérez facilement vos propres promotions.</h1>
                    <p>Activez et mettez en place des promotions en toute transparence, avec le même contrôle que pour les repas en personne.</p>
                </div>
                <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <h1 className='my-4 text-2xl font-semibold'>Simplification des rapports et des analyses.</h1>
                    <p>Suivez vos recettes, évaluez les performances de vos promotions, et bien plus encore, en accédant à des rapports quotidiens, hebdomadaires et mensuels.</p>
                </div>
            </div>
           
        </section>

        <section className='px-32 py-16 bg-[#F60D2B]'>
            <h1 className='text-4xl font-semibold text-center text-[#ffffff] my-4 '>Comment ça marche</h1>
            <p className='text-center text-[#ffffff] mb-10'>Une fois que vous avez rejoint Ufood, voici ce qui vous attend.</p>
            <div className='relative  flex gap-4'>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mockLogin}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>1</div>
                    <h1 className='font-bold text-2xl'>Inscrivez vous</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center"> <HiOutlineArrowRight className='text-6xl text-[#ffffff]' /> </div>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mockHome}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>2</div>
                    <h1 className='font-bold text-2xl'>Recherchez un repas</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center"> <HiOutlineArrowRight className='text-6xl text-[#ffffff]' /> </div>

                <div className="flex gap-4 justify-center items-center text-center flex-col text-[#ffffff]">
                    <Image
                        src={mockPanier}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>3</div>
                    <h1 className='font-bold text-2xl'>Ajoutez au panier </h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
            </div>
        </section>

        <section className='w-full  bg-[#e7e7e7] px-32 py-16'>
            <h1 className='text-4xl mb-8 font-semibold text-center text-[#181818]'>Témoignages</h1>
            <div className='w-full  text-white relative  grid  gap-4 grid-cols-3 '>
                <div className='rounded-md bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>Le premier travail que j&apos;apprécie vraiment. Travailler à l&apos;extérieur me procure un sentiment de liberté.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Babbel Kitio</h1>
                </div>
                <div className='rounded-md bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>J&apos;aime le fait que je puisse planifier mon propre temps, et la route offre beaucoup d&apos;expérience qu&apos;on ne peut pas acquérir autrement.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Victor Urbain</h1>
                </div>
                <div className='rounded-md bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>J&apos;aime la flexibilité qu&apos;offre ce travail et j&apos;aime être au grand air.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Alzahed Oudini</h1>
                </div>
            </div>
        </section>
        <section className='px-32 py-16 bg-[#ffffff] relative'>
            <div className=" bg-[#F60D2B] p-20 rounded-3xl flex h-[60vh]">
                <div className='flex justify-center flex-col'>
                    <h1 className='text-4xl font-bold text-white'>Téléchargez l&apos;application <br /> maintenant!</h1>
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
       
        <section className='w-full py-14 bg-[#e7e7e7]'>
            <div className='flex flex-col justify-center items-center text-[#181818] '>
                <h1 className='text-5xl mb-4 font-semibold'>Viens vivre l&apos;expérience</h1>
                <p className='mb-4'>Rejoins-nous dès aujourd’hui !</p>
                <Link href="/inscriptionRestaurant" ><button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#F60D2B] rounded-md transition-all duration-300'>Postulez dès maintenant </button></Link>
            </div>
        </section>
        <FooterRed/>
    </div>
  )
}

export default Restaurant;
