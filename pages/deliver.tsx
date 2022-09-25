
import React from 'react';
import Image from 'next/image';
import mocks from './assets/mock.svg';
import mi from './assets/mi.svg';
import hands from './assets/hands.svg';
import uDeliver from './assets/udeliv-w.svg';
import 'react-phone-input-2/lib/style.css';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';


import FooterOther from './components/footer/footerOther';
import Link from 'next/link';
import Faq from './components/accordion/faq/faq';

// const Link = (props: any) => <a href={props.href}>{props.children}</a>;

function Deliver() {
    
  return (
    <div className='text-[#181818]'>
        <section className=' deliver h-[86vh] w-full bg-[#ffffff] grid  gap-4 grid-cols-2'>
            <div className="bloc1 pl-32 pt-8 >" >
                <Image
                    src={uDeliver}
                    alt='/'
                    width='80'
                    height='80'
                    priority
                    className='immmg'
                />
                <h1 className='text-5xl font-semibold text-[#181818] my-8'>Livrez avec <strong className='text-[#252036]'>UDelivery</strong></h1>
                <h4 className='text-2xl font-semibold mb-4'>Pas de patron, Des horaires flexibles, Des paiements rapides.</h4>
                <p>Vous pouvez générer des revenus en sillonnant les rues de votre ville pour
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
                <Image
                        src={hands}
                        alt='/'
                        layout="fill"
                    />
            </div>
        </section>

        <section className='px-32 py-16 bg-[#ffffff]'>
            <h1 className='mb-8 text-4xl font-semibold text-center'>Livrez comme vous voulez</h1>
            <div className="w-full  text-white relative  grid  gap-4 grid-cols-3 ">
                 <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
               
                    {/* <div>
                        <BsClockHistory/>
                    </div> */}
                    <h1 className='my-4  text-2xl font-semibold'>Choisissez vos horaires</h1>
                    <p>Vous êtes maître de votre emploi du temps et pouvez adapter votre disponibilité hebdomadaire en fonction de ce qui vous convient.</p>
                
                </div>
                <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <h1 className='my-4 text-2xl font-semibold'>Soyez payé toutes les semaines</h1>
                    <p>À la fin de chaque semaine, vos gains seront directement déposés sur votre compte chaque semaine.</p>
                </div>
                <div className='bg-[#f0f0f0] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <h1 className='my-4 text-2xl font-semibold'>Redécouvrez votre ville</h1>
                    <p>Profitez du trajet entre la prise en charge et la livraison des commandes pour découvrir toutes les facettes de votre ville.</p>
                </div>
            </div>
           
        </section>
        <section className='px-32 py-16 bg-[#252036]'>
            <h1 className='text-4xl font-semibold text-center text-[#ffffff] my-4 '>Comment ça marche</h1>
            <p className='text-center text-[#ffffff] mb-10'>Une fois que vous avez rejoint Udelivery, voici ce qui vous attend.</p>
            <div className='relative  flex gap-4'>
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
                <div className="flex justify-center items-center"> <HiOutlineArrowRight className='text-6xl text-[#ffffff]' /> </div>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>2</div>
                    <h1 className='font-bold text-2xl'>Accepter la course</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center"> <HiOutlineArrowRight className='text-6xl text-[#ffffff]' /> </div>

                <div className="flex gap-4 justify-center items-center text-center flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>3</div>
                    <h1 className='font-bold text-2xl'>Accepter la course</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
            </div>
        </section>
        <section className='px-32 py-16 bg-[#ffffff] relative'>
            <div className=" bg-[#252036] p-20 rounded-3xl flex h-[60vh]">
                <div className='flex justify-center flex-col'>
                    <h1 className='text-4xl font-bold text-white'>Téléchargez l’application <br /> maintenant!</h1>
                    <div className='flex gap-4 mt-8'>
                        
                        <div className=" flex px-4 py-4 gap-4 bg-[#ffffff] rounded-md items-center justify-center  w-[16rem] cursor-pointer">
                            <div className=''><FaGooglePlay className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>Google Play</p>
                            </div>
                        </div>
                        <div className=" flex px-4 py-4 gap-4 bg-[#ffffff] rounded-md items-center justify-center  w-[16rem] cursor-pointer">
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
                    src={mocks}
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
                <h1 className='text-5xl mb-4 font-semibold'>Prêt à embarquer ?</h1>
                <p className='mb-4'>Rejoins-nous dès aujourd’hui !</p>
                <Link href="/inscriptionDeliver">
                    <button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] rounded-md transition-all duration-300'>Postulez dès maintenant</button>
                </Link>
            </div>
        </section>
        <Faq/>
        <FooterOther/>
       
    </div>
  )
}

export default Deliver;