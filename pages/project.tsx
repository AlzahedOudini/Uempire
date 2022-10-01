
import React from 'react';
import BackTopBtn from './components/backToTop/backTopBtn';
import Footer from './components/footer/footer';
import SmallHeroProject from './components/hero/smallHeroProject';
import Navbar from './components/navbar/navbar';
import projectdata from './data/propject.json';
import ProjectList from './list/projectList';

function Project() {
  
  return (
    <div>
      <Navbar/>
      <SmallHeroProject/>
      <section className='privsection'>
        <h1 className='text-4xl font-bold mb-10' data-aos='fade-up' data-aos-delay='300' data-aos-duration="500">Voici quelques-unes de nos réalisations .</h1>
        <p className='mb-10'data-aos='fade-up' data-aos-delay='300' >Nous travaillons sur des plateformes dédiées besoins des populations.
         Nos solutions proviennent de plusieurs domaines et sont multi-plateformes. Vous avez des questions ? N&apos;hésitez pas, contactez-nous!
        </p>
        <div>
          <ProjectList/>
        </div>
      </section>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default Project;
