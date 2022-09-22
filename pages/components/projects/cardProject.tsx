import React, { FC } from 'react';
import Image from 'next/image';
import down from '../../assets/about.svg'; 

type CardProjectProps = {
  name: string;
  type: string;
  images: string;
  createdate?: string;
}

const CardProject: FC<CardProjectProps> = ({name,type,images,createdate}) => {
  
  return (
    <div className='cardProject' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
      <Image
        src={images}
        alt='/'
        layout='fill'
        className='projt_img'
      />
			<div className='detailCard'>
				<p className='categProject'>{type}</p>
				<h4 className='projectName'>{name}</h4>
				<p className='seeMore'>{createdate}</p>
			</div>
    </div>
  );
}

export default CardProject;
