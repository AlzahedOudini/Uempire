import Link from 'next/link';
import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

type ServCardProps = {
  name: string;
  desc: string;
}

function ServCard({name, desc}: ServCardProps) {
  return (
    <div className='Content-serv text-justify' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
      <h2 className='card_title'>{name}</h2>
      <p>{desc} </p>
      <Link href='/services'>
        <div className='card_btn'>
            <BsArrowRight/>
        </div>
      </Link>
    </div>
  )
}

export default ServCard;
