import React, { FC } from 'react';
import Image from 'next/image';

type TeamCardProps = {
  profilPic: string,
  name: string,
  poste: string
}

const TeamCard: FC<TeamCardProps> = ({profilPic, name, poste}) => {
  return (
    <div className='TeamCard px-4 py-8 rounded-xl' data-aos='fade-up' data-aos-delay='300'>
        <Image
          src={profilPic}
          alt='/'
          width='100'
          height='100'
          className='mb-6 rounded-full'
        />
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className=' text-semi '>{poste}</p>
    </div>
  )
}

export default TeamCard;
