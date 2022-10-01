import Link from 'next/link';
import React from 'react';
import ServList from '../../list/servList';

function ServiceSec() {
  return (
    <div>
        <section className='Myserv mysection'>
            <div className='box_head_title'>
                <p className='mini-title' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">Nos services</p>
                <h1 className='all_title mb-4' data-aos='fade-up' data-aos-delay='300'>Toute notre expertise pour un service de qualité.</h1>
                <p>Chez UEMPIRE, répondre aux besoins de ses clients est une priorité constante.
                     Pour ce faire, il s&apos;adapte à l&apos;évolution des comportements de sa population 
                     et clients, à leur répartition territoriale et à leurs limitations physiques et sociales.</p>
                <div className='Cardbox'>
                    <ServList/>
                </div>
                <button className='devi_btn mt-8' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1800">
                    <Link href="/services">Voir tous les services</Link>
                </button>
            </div>
        </section>
    </div>
  )
}

export default ServiceSec;
