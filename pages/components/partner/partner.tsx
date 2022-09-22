import React from 'react';
import part1 from '../../assets/partner/part1.png';
import part2 from '../../assets/partner/part2.png';
import part3 from '../../assets/partner/part3.webp';
import Image from 'next/image';

function Partner() {
  return (
    <section className='mysection myclient'>
      <div className='box_head_title'>
        {/* <p className='mini-title'>Nos Clients</p>
        <h1 className='all_title'>Quelques-uns de nos partenaires</h1> */}
        <div className='boxLogo' data-aos='fade-up' data-aos-delay='300'>
            <Image src={part1} alt='/' width='140' height='100' priority />
            <Image src={part3} alt='/' width='100' height='100' priority />
            <Image src={part1} alt='/' width='140' height='100' priority />
            <Image src={part1} alt='/' width='140' height='100' priority />
            <Image src={part1} alt='/' width='140' height='100' priority />
        </div>
      </div>
      
    </section>
  )
}

export default Partner;
