
import React from 'react';
import about from '../../assets/about.svg';
import victor from '../../assets/victor.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Aboutsec() {
  const router = useRouter()
  return (
    <section className='Mysec'>
      
        <div className='boxImg' data-aos='fade-up' data-aos-delay='500'>
            <Image
                src={victor}
                alt='/'
                width='400'
                height='400'
                priority
                className='rounded-lg'
            />
        </div>
        <div className='boxText sm: items-center sm: justify-center ' data-aos='fade-up' data-aos-delay='300'>
            <h1 className='about_title'>Mot Du CEO </h1>
            <p className='descrip text-justify'>
            <strong>UEMPIRE</strong>, <br /> <br />

            L&apos;Empire de Urbain est un rêve qui se réalise. <br />
            
            Depuis mon jeune âge, j&apos;ai toujours souhaité en ma manière proposer des solutions technologiques modernes 
            et adaptées aux besoins de nos populations. C&apos;est de cette volonté que nait UEMPIRE. <br />
            Sa mission première est de contribuer efficacement à l&apos;épanouissement des populations, 
            et à la croissance des entreprises, en fournissant d’une part des services de qualité 
            taillés sur mesure, et en les accompagnant dans leur virage numérique en d’autre part. <br />
            Organismes gouvernementaux, entreprises publiques et privées, votre CONFIANCE nous honore !

            <br /> <br />
            Victor Urbain, Le Fondateur. 

            </p><br/><br/>
            
            <button className='devi_btn' onClick={() => router.push('mailto:info@uempire.ca')}>Contactez-nous !</button>
        </div>
    </section>
  )
}

export default Aboutsec;
