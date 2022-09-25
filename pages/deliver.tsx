
import React from 'react';
import Image from 'next/image';
import mocks from './assets/mock.svg';
import mi from './assets/mi.svg';
import hands from './assets/hands.svg';
import uDeliver from './assets/udeliv-w.svg';
import 'react-phone-input-2/lib/style.css';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple, AiOutlineFieldTime } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';


import FooterOther from './components/footer/footerOther';
import Link from 'next/link';
import { MdTravelExplore } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

// const Link = (props: any) => <a href={props.href}>{props.children}</a>;

function Deliver() {
    
  return (
    <div className='text-[#181818]'>
        <section className=' deliver h-[86vh] w-full bg-[#ffffff] grid  gap-4 grid-cols-1 md:grid-cols-2 '>
            <div className="px-10 flex flex-col items-center md:items-start md:justify-center md:pl-32 pt-8 >" >
                <Image
                    src={uDeliver}
                    alt='/'
                    width='80'
                    height='80'
                    priority
                    className='immmg'
                />
                <h1 className='text-5xl font-semibold text-[#181818] text-center md:text-left my-8'>Livrez avec <strong className='text-[#252036]'>UDelivery</strong></h1>
                <h4 className='text-2xl font-semibold mb-4 text-center md:text-left'>Pas de patron, Des horaires flexibles, Des paiements rapides.</h4>
                <p className='text-center md:text-left'>Vous pouvez générer des revenus en sillonnant les rues de votre ville pour
                     livrer de délicieux repas avec l&apos;application UDelivery.
                </p>
                <div className='py-6'>
                    <Link href="/inscriptionDeliver">
                        <button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] rounded-md hover:bg-transparent border-2 border-[#252036] hover:text-[#181818] transition-all duration-300'>Postulez dès maintenant</button>
                    </Link>
                </div>
                {/* <p className='uppercase mt-6 mb-4 font-medium text-sm text-[#a9abb2]'>VILLES POPULAIRES AU camereroun</p>
                <div className="cities flex gap-4 ">
                    <div className='px-4 py-2 bg-[#252036] text-white rounded-full w-[8rem] flex justify-center items-center'>Moncton</div>
                    <div className='px-4 py-2 bg-[#252036] rounded-full text-white w-[8rem] flex justify-center items-center'>Douala</div>
                    <div className='px-4 py-2 bg-[#252036] rounded-full text-white w-[8rem] flex justify-center items-center'>Yaoundé</div>
                </div> */}
            </div>
            <div className=" bg-[#252036]  relative">
                {/* <Image
                        src={hands}
                        alt='/'
                        layout="fill"
                        className='hidden'
                    /> */}
            </div>
        </section>

        <section className='px-8 py-8 md:px-8 md:py-8 lg:px-32 lg:py-12 bg-[#ffffff]'>
            <h1 className='mb-8 text-4xl font-semibold text-center'>Livrez comme vous voulez</h1>
     
            <div className=" text-white relative  grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                 <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
               
                    <div className='mb-3'>
                        <AiOutlineFieldTime className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4  text-2xl font-semibold'>Choisissez vos horaires</h1>
                    <p>Vous êtes maître de votre emploi du temps et pouvez adapter votre disponibilité hebdomadaire en fonction de ce qui vous convient.</p>
                
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <GiReceiveMoney className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Soyez payé toutes les semaines</h1>
                    <p>À la fin de chaque semaine, vos gains seront directement déposés sur votre compte chaque semaine.</p>
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <MdTravelExplore className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Redécouvrez votre ville</h1>
                    <p>Profitez du trajet entre la prise en charge et la livraison des commandes pour découvrir toutes les facettes de votre ville.</p>
                </div>
            </div>
        </section>
        
        
        <section className='px-8 py-8 bg-[#252036] lg:py-16'>
            <h1 className='text-4xl font-semibold text-center text-[#ffffff] my-4 '>Comment ça marche</h1>
            <p className='text-center text-[#ffffff] mb-10'>Une fois que vous avez rejoint Udelivery, voici ce qui vous attend.</p>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute left-[31%] top-[30vh] ' /> </div>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
            <div className='relative grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4'>
            
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>1</div>
                    <h1 className='font-bold text-2xl'>Accepter la course</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>2</div>
                    <h1 className='font-bold text-2xl'>Récupérer la commande au restaurant</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>

                <div className="flex gap-4 justify-center items-center text-center flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>3</div>
                    <h1 className='font-bold text-2xl'>Livrez et gagnez de l&apos;argent </h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
            </div>
        </section>              


        <section className='px-8 py-8 lg:px-32 lg:py-12 bg-[#252036] lg:bg-[#fafafa] relative'>
            <div className=" bg-[#252036] md:p-20 rounded-3xl flex h-auto  md:h-[60vh]">
                <div className='flex justify-center flex-col text-center lg:text-left w-[100%] lg:w-[60%]'>
                    <h1 className='text-4xl font-bold text-white mb-4'>Téléchargez l&apos;application <br /> maintenant!</h1>
                    <p className='text-white'>Désormais, vous pouvez vous faire livrer de la nourriture à peu près où que vous soyez grâce à l&apos;application gratuite et conviviale de livraison de nourriture et de plats à emporter.</p>
                    <div className='gap-4 mt-8 grid grid-cols-1 justify-items-center lg:justify-items-start md:grid-cols-2'>
                        
                        <div className=" flex px-4 py-2 gap-4 w-[15rem]  max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><FaGooglePlay className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>Google Play</p>
                            </div>
                        </div>
                        <div className="ml-0 lg:ml-[-5rem] flex px-4 py-2 gap-4 w-[15rem] max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><AiFillApple className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>App store</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className=' absolute z-50 left-[55%] top-[2rem] hidden  lg:flex'>
                    <Image
                    src={mocks}
                    alt='/'
                    width='500'
                    height='500'
                    priority
                    className='absolute'
                    />
            </div>
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12'>
            <div className='relative  grid  gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                <div className="bg-[url('https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg?w=900')] h-[60vh] drop-shadow-md rounded-xl relative">
                    <div className='text-white grid content-end w-full h-full p-6 bg-[#1818183f] rounded-xl'>
                        <h1 className='capitalize text-2xl font-bold mb-4'>Devenir partenaire</h1>
                        <p className='mb-3'>Rejoignez UFood et touchez plus de clients que jamais. Nous nous occupons de la livraison, vous pouvez donc vous concentrer sur les repas.</p>
                        <Link href="/restaurant">
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#252036] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#252036] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
                <div className="bg-[url('https://img.freepik.com/free-photo/still-life-food-delivery_23-2149198115.jpg?w=900&t=st=1664130228~exp=1664130828~hmac=a18aff56522e57e453bb5ffee1873f064b2f014a8b1713de1a4a830f0f4fc641')] h-[60vh] drop-shadow-md rounded-xl relative bg-no-repeat bg-center bg-cover">
                    <div className='text-white grid content-end w-full h-full p-6 bg-[#1818183f] rounded-xl'>
                        <h1 className='capitalize text-2xl font-bold mb-4'>Une petite faim ? </h1>
                        <p className='mb-3'>Faites vous livré vos menus préférés du restaurant à votre porte en un fraction de seconde !</p>
                        <Link href="/ufood">
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#252036] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#252036] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12'>
            <h1 className='text-4xl font-semibold text-center text-[#181818] my-4 '>Questions fréquentes</h1>
            <div className='flex justify-center py-4'>
                <div className='w-full md:w-[80%]'>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem >
                            <h2 >
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quelles sont les conditions requises pour être un livreur
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quels sont les documents dont j&apos;ai besoin ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Comment suis-je payé ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Puis-je livrer avec mon propre véhicule ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
        <section className='w-full py-14 px-8 bg-[#e7e7e7]'>
            <div className='flex flex-col justify-center text-center items-center text-[#181818] '>
                <h1 className='text-5xl mb-4 font-semibold'>Prêt à embarquer ?</h1>
                <p className='mb-4'>Rejoins-nous dès aujourd’hui !</p>
                <Link href="/inscriptionDeliver">
                    <button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] rounded-md transition-all duration-300'>Postulez dès maintenant</button>
                </Link>
            </div>
        </section>
        <FooterOther/>
       
    </div>
  )
}

export default Deliver;