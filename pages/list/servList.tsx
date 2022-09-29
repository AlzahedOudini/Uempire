import React from 'react';
import ServCard from '../components/service/servCard';


const serviceList = [
    {
        numService: '01',
        name: 'Developpement Web & UI-UX DESIGN',
        desc: 'Nous offrons un accompagnement personnalisé de la conception à la réalisation de vos plateformes vitrines. Opter pour une conception sur mesure, adaptée à votre image. ',
        id: '01'
    },
    {
        numService: '02',
        name: 'Developpement Mobile',
        desc: 'Nous développons des applications multi-plateformes et responsive. En utilisant les dernières technologies, nous garantissons des solutions stables et user friendly.',
        id: '02'
    },
    {
        numService: '03',
        name: 'Télétravail & Consulting',
        desc: 'Nous vous offrons un accompagnement personnalisé pour l’atteinte de votre maturité numérique.  Bénéficier de notre expertise pour bâtir vos fondations dans vos projets de développement numériques et technologiques.',
        id: '03'
    },
    {
        numService: '04',
        name: 'Support Technique',
        desc: 'Confiez-nous la sante de vos équipements et installations informatiques, et nous garantissons leur bon fonctionnement.',
        id: '04'
    },
    {
        numService: '05',
        name: 'Consultant Technologique',
        desc: 'Nous vous offrons un accompagnement personnalisé pour l’atteinte de votre maturité numérique.  Bénéficier de notre expertise pour bâtir vos fondations dans vos projets de développement numériques et technologiques.',
        id: '04'
    },
    {
        numService: '05',
        name: 'Design Interne & Externe ',
        desc: 'Nous réalisons pour votre satisfaction totale le design de vos maisons, hôtels, appartement et même vos bureaux.  Un design adapté à votre image. Consulter nos quelques-unes de nos réalisations.',
        id: '04'
    }
];

function ServList() {
  return (
    <div className='contentOfService'>
       {serviceList && serviceList.map(slist =>(
        <ServCard key={slist.id} name={slist.name} desc={slist.desc} />
       ))}
    </div>
  )
}

export default ServList;
