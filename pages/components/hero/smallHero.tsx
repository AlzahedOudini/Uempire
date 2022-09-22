/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import serv from '../../assets/serv.png';

function SmallHero() {
  return (
    <div className=' bg-white text-white'>
        <div className='containImgHero' data-aos='zoom-in' data-aos-delay='500'>
            <div className='hero_small'>
                <div className="content" >
                    <h1 className='small_hero_title text-center text-4xl font-bold m-5 sm:m-2'>Nos Services</h1>
                    <p className='text-center'>Nous planifions et élaborons des stratégies pour vous offrir notre plein 
                        potentiel et réaliser votre projet avec succès. 
                        Nous savons qu'une seule approche ne peut satisfaire à toutes les entreprises, c’est pourquoi 
                        nous proposons des approches sur mesure. 
                    </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SmallHero;