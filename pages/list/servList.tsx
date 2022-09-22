import React from 'react';
import ServCard from '../components/service/servCard';


const serviceList = [
    {
        numService: '01',
        name: 'Developpement Web & UI-UX DESIGN',
        desc: 'Nous offrons un suivi personnalisé de la conception a la réalisation de vos plateformes vitrines. Une conception sur mesure adaptée à votre image. ',
        id: '01'
    },
    {
        numService: '02',
        name: 'Developpement Mobile',
        desc: 'Web development is the work involved in developing a we the site for the Internetis the work a involved in developing a web site for the Internet...',
        id: '02'
    },
    {
        numService: '03',
        name: 'Télétravail & Consulting',
        desc: 'Web development is the work involved in developing a we the site for the Internetis the work a involved in developing a web site for the Internet...',
        id: '03'
    },
    {
        numService: '04',
        name: 'Support technique',
        desc: 'Confiez nous la santé de vos outils et services informatiques.Nous garantissons le bon fonctionnement de vos équipements informatiques et de votre réseau. ',
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
