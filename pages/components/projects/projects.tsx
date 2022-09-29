import React from 'react';
import Link from 'next/link';
import ProjectList from '../../list/projectList';

function Projects() {
  return (
    <section className='OurProject mysection'>
        <div className='box_head_title'>
            <p className='mini-title' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">Nos Réalisations </p>
            <h1 className='all_title'data-aos='fade-up' data-aos-delay='300' >Quelques-uns de nos récents travaux</h1>
        </div>
        <div className='mt-10'>
            <ProjectList/>
        </div>

        <button className='devi_btn plus_serv whitebtn' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1800">
            <Link href="/project">Tous nos projets</Link>
        </button>
    </section>
  )
}

export default Projects;