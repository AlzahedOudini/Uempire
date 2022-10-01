
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SmallHeroContact() {
  return (
    <div className='h-[30vh] bg-white text-white'>
        <div className='containImgHero' data-aos='zoom-in' data-aos-delay='300'>
            <div className='hero_small'>
                <div className="content" >
                    <h1 className='small_hero_title text-center text-5xl font-bold m-5 sm:m-2 capitalize'>Contactez-Nous !</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SmallHeroContact;