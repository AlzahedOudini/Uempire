
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
            <h1 className='about_title'>Mot Du Fondateur</h1>
            <p className='descrip text-justify'>
            <strong>UEMPIRE</strong>, <br /> <br />

            L&apos;Empire de Urbain est un rêve qui se réalise. <br />
            
            Depuis ma tendre enfance, j&apos;ai toujours souhaité contribuer à ma manière à la création des solutions technologiques modernes et adaptées aux populations, capables de répondre à leur besoin. C&apos;est de cette volonté que nait <strong>UEMPIRE</strong>. 

            Sa mission principale est de faire de rendre notre population des personnes heureuses et habiles dans leur quotidien, en les fournissant des services de qualité, taillées à leur besoin et dans les délais impartis.
            
            Concevoir et réaliser des solutions web et mobiles sur mesure pour rendre notre clientèle   leader dans leurs secteurs d&apos;activité.
            
            Organisme gouvernemental et non gouvernemental, entreprises privées et publiques, votre confiance nous honore !
            <br /> <br />
            Victor Urbain, Le Fondateur. 

            </p><br/><br/>
            
            <button className='devi_btn' onClick={() => router.push('mailto:info@uempire.ca')}>Contactez-nous !</button>
        </div>
    </section>
  )
}

export default Aboutsec;
