/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Devis from './components/devis/devis';
import Footer from './components/footer/footer';
import SmallHero from './components/hero/smallHero';
import Navbar from './components/navbar/navbar';
import icn1 from './assets/icn1.svg';
import icn2 from './assets/icn2.svg';
import mob from './assets/mob.webp';
import teletravail from './assets/teletravail.jpg';
import web from './assets/web.webp';
import {BsCheck} from 'react-icons/bs';
import Image from 'next/image';
import BackTopBtn from './components/backToTop/backTopBtn';

function Services() {
  return (
    <div>
        <Navbar/>
        <SmallHero/>
        <section className='px-8 py-8 lg:px-32 lg:py-14 grid  mt-24 bg-[#ffffff] '>
              <div className='py-10 pt-20 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2'>
                <div className=' ' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={web}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div>
                        <Image
                                data-aos='fade-right' 
                                src={icn1}
                                alt='/'
                                priority
                                width='80'
                                height='80'
                                className='mb-4 smallHeroBg rounded-2xl'
                        />
                        <h1 className=" mb-4 text-4xl font-bold" >Developpement Web & UI-UX DESIGN</h1>
                        <p className="descr text-justify">En utilisant toutes les technologies, nous réalisons des sites
                        web intuitifs et personnalisées. Nous couvrons tous les aspects de développement web : 
                        de la création de pages de texte simple à des applications web complexes, en passant 
                        par des applications de réseaux sociaux et des applications commerciales électroniques.</p>
                    </div>
                </div>
              </div>
        </section>

        <section className='px-8 py-8 lg:px-32 lg:py-14  bg-[#181818] grid'>
              <div className='py-10 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 '>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div className=' ctn-text relative text-white'>
                            <Image
                            src={icn1}
                            alt='/'
                            priority
                            width='80'
                            height='80'
                            className=' smallHeroBg rounded-2xl'
                        />
                        <h1 className="my-4 font-bold text-3xl">Developpement Mobile</h1>
                        <p className="descr text-justify">Bénéficiez de notre expérience en développement d’application
                        mobiles basée sur les meilleurs practiques de conception et de développement sur les environnements
                        Android et iOS : </p>
                        <ul className='mt-4'>
                            <div className=' flex items-center gap-4 mt-2'>
                                <BsCheck className=' text-3xl text-[#FFB040] '/>
                                <li>Développement d'applications iPhone</li>
                            </div>
                            <div className='flex items-center gap-4 mt-2'>
                                <BsCheck className=' text-3xl text-[#FFB040]'/>
                                <li>Développement d'applications Android</li>
                            </div>
                            <div className='flex items-center gap-4 mt-2'>
                                <BsCheck className='text-3xl text-[#FFB040]'/>
                                <li>Développement d'applications hybrides</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={mob}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
              </div>
        </section>

        <section className='px-8 py-8 lg:px-32 lg:py-14  bg-[#ffffff] grid'>
              <div className='py-10 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 '>
                
                <div className='flex justify-start' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={teletravail}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div className=' ctn-text relative text-[#181818] '>
                            <Image
                            src={icn1}
                            alt='/'
                            priority
                            width='80'
                            height='80'
                            className=' smallHeroBg rounded-2xl'
                        />
                        <h1 className=" mb-4 text-4xl font-bold" >Télétravail & Consulting</h1>
                        <p className="descr text-justify">Grâce à nos partenaires et à notre service à la clientèle,
                        nous accompagnons les entreprises à s’adapter et à prospérer dans les marchés dynamiques
                        d'aujourd'hui. Nous travaillons avec vous tout au long du processus pour vous aider à
                        surmonter les défis commerciaux complexes.</p>
                    </div>
                </div>
              </div>
        </section>


        <section className='px-8 py-8 lg:px-32 lg:py-14  bg-[#181818] grid'>
              <div className='py-10 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 '>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div className=' ctn-text relative text-white'>
                            <Image
                            src={icn1}
                            alt='/'
                            priority
                            width='80'
                            height='80'
                            className=' smallHeroBg rounded-2xl'
                        />
                        <h1 className="my-4 font-bold text-3xl">Support technique</h1>
                        <p className="descr text-justify">Confiez-nous la santé de vos outils et équipements informatiques.
                        Nous garantissons leur bon fonctionnement.</p>
                        
                    </div>
                </div>
                <div className='flex justify-end' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={mob}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
              </div>
        </section>


        <section className='px-8 py-8 lg:px-32 lg:py-14  bg-[#ffffff] grid'>
              <div className='py-10 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 '>
                
                <div className='flex justify-start' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={teletravail}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div className=' ctn-text relative text-[#181818] '>
                            <Image
                            src={icn1}
                            alt='/'
                            priority
                            width='80'
                            height='80'
                            className=' smallHeroBg rounded-2xl'
                        />
                        <h1 className=" mb-4 text-4xl font-bold" >Design maison (interne et externe) </h1>
                        <p className="descr text-justify">Nous réalisons pour votre satisfaction totale le design de vos maisons,
                        hôtels, appartement et même vos bureaux.  Un design adapté à votre image. Consulter nos quelques-unes de nos réalisations. </p>
                    </div>
                </div>
              </div>
        </section>


        <section className='px-8 py-8 lg:px-32 lg:py-14  bg-[#181818] grid'>
              <div className='py-10 grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-2 '>
                <div className="flex items-center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="500">
                    <div className=' ctn-text relative text-white'>
                            <Image
                            src={icn1}
                            alt='/'
                            priority
                            width='80'
                            height='80'
                            className=' smallHeroBg rounded-2xl'
                        />
                        <h1 className="my-4 font-bold text-3xl">Implantation ERP</h1>
                        <p className="descr text-justify">Nous implantons des systèmes de gestion intégré adapté aux besoins des entreprises</p>
                        
                    </div>
                </div>
                <div className='flex justify-end' data-aos='fade-right' data-aos-delay='300' data-aos-duration="500">
                    <Image
                        src={mob}
                        alt='/'
                        priority
                        width='500'
                        height='500'
                        className='smallHeroBg rounded-2xl'
                    />
                </div>
              </div>
        </section>




        
      <Devis/>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default Services;
