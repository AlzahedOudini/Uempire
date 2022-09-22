
import React from 'react';
import { useRouter } from 'next/router';

function Devis() {
  const router = useRouter()
  return (
    <section className='Devis mysection' >
      
      <div className='boxDevis' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">
        <h1 className='quest'>Avez-vous un projet à réaliser ?</h1>
        <div className='descDev'>
        <p className='devis_desc'  >le suivant.
          Vous avez un projet en tête et vous ne savez par où commencer ? Nous avons peut-être une solution pour vous.
        </p>
        </div>
        <button className='devi_btn' onClick={() => router.push('mailto:info@uempire.ca')}>Demander un Devi</button>
      </div>
    </section>
  )
}

export default Devis;