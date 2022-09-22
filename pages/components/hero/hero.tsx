import React, { useState } from 'react';
import Image from 'next/image';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import down from '../../assets/down.svg';
import Link from 'next/link';

function Hero() {
  

  return (
    <div className='HeroContainer'>
        <div className='heroBg' data-aos='zoom-in' data-aos-delay='500'>
            <div className='content'>
              
            <p className='HeroDetail' >Tout notre savoir faire pour une digitalisation réussie. Ensemble, 
                  nous ferons passer votre marque au niveau supérieur.
              </p>
              <button className='devi_btn whitebtn'>
                    <Link href="/project" >Voir nos travaux </Link>
              </button>
            </div>
            <div className='heroDown'>
              {/* <Image
                  src={down}
                  alt='/'
                    width='60'
                    height='60'
                    priority
              /> */}
              <div className="my-icon-scroll"></div>
              <div className='media'>
                <FaWhatsapp className='Smedia'/>
                <FaLinkedinIn className='Smedia'/>
                <FaTwitter className='Smedia'/>
                <FaFacebookF className='Smedia'/>
              </div>
            </div>
            <div className="my-icon-scroll absolute bottom-7 sm:flex md:hidden lg:hidden xl:hidden 2x:hidden"></div>
        </div>
    </div>
  )
}

export default Hero;
