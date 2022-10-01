
import React from 'react';
import Image from 'next/image';
import uemp from './assets/uem.png';
import Navbar from './components/navbar/navbar';
import TeamList from './list/teamList';
import Footer from './components/footer/footer';

import Partner from './components/partner/partner';
import BackTopBtn from './components/backToTop/backTopBtn';
import SimpleNav from './components/navbar/simpleNav';
import SmallHeroAbout from './components/hero/smallHeroAbout';

function About() {
  
  return (
    <div>
      <Navbar/>
      <SmallHeroAbout/>
      <section className="whoweare">
        <div className="bxtext" data-aos='fade-right' data-aos-delay='500'>
            <h1 className="title" >Ce qui nous rend unique</h1>
            <p className="textdes text-justify" >
            {/* Nous sommes une société de services informatiques à part entière qui ouvre de nouvelles possibilités et qui remodèle
             la génération axée sur la technologie. Chez <strong>UEmpire</strong>, nous croyons fermement à l'instauration de la confiance
              pour dépasser les frontières technologiques. Nous répondons directement aux besoins commerciaux de nos clients 
              en leur fournissant des solutions numériques robustes. <br /> Notre modus operandi (mode de fonctionnement) consiste 
              à explorer les moyens contemporains d'établir de meilleures relations avec les clients. Notre équipe 
              d'experts élabore des plans de travail personnalisés en tenant compte de la vigueur du marché. Nous 
              essayons constamment de faire preuve d'excellence dans tous les projets complexes afin d'encadrer
               et d'amplifier les capacités exceptionnelles d'une manière agile. */}
               <strong>UEMPIRE</strong> se veut être une entreprise de proposition de services technologiques axée sur l&apos;innovation, l&apos;efficacité et la créativité. 

              <br /> <br /> Chez UEMPIRE, nous appliquons une approche axée sur l&apos;humain, pour créer des solutions numériques, bâtir nos équipes et établir notre relation cliente.
              Elle est composée de jeunes, dynamiques et engagés, excellent chacun dans un domaine, dont l&apos;objectif est de produire des systèmes informatiques robustes et sécurisées, répondant aux problématiques courantes de bien-être des populations : nutrition, sécurité, accessibilité, et sciences humaines.   
              <br /> <br />
              Chez UEMPIRE, nous appliquons une approche axée sur l&apos;humain, pour créer des solutions numériques et bâtir nos équipes afin d&apos;établir une relation cliente efficace.
              <br /><br />
              UEMPIRE, la garantie d’un service de qualité !
              

            </p>
        </div>
        <div className="bxImg" data-aos="fade-left" data-aos-delay='500' >
          <Image
            src= {uemp}
            alt='/'
            width='500'
            height='500'
            priority
            className='rounded-md'
          />
        </div>
      </section>
      <section>
        <Partner/>
      </section>
      <section className='mysection data-aos="fade-down"'>
        <div className='box_head_title'>
          <p className='mini-title' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">Notre Equipe</p>
          <h1 className='all_title mb-6' data-aos='fade-up' data-aos-delay='300'>Notre équipe de choc.</h1>
        </div>
        <TeamList data-aos="fade-down"/>
      </section>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default About;
