import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/uempire.svg';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

function Footer() {
  return (
    <section className='MyFooter mysection'>
      <div className='FooterBox1' data-aos='fade-up' data-aos-delay='300' >
        <Link href="/" className='logo'>
            <Image
                src={logo}
                alt='/'
                width='160'
                height='160'
                priority
                className='img-logo'
            />
        </Link>
        <p className='copyr'>
            Copyright © 2022 UEmpire. All rights reserved.
        </p>
        </div>
        <div className='FooterBox2' data-aos='fade-up' data-aos-delay='300'>
            <h5 className='FooterTitle'>Liens Rapides</h5>
            <div className='boxLink'>
                <Link href="/about"><a className='NavLink'>A Propos</a></Link>
                <Link href="/services"><a className='NavLink'>Services</a></Link>
                <Link href="/project"><a className='NavLink'>Projets</a></Link>
                <Link href="/contact"><a className='NavLink'>Contact</a></Link>
             </div>
        </div>
        <div className='FooterBox3' data-aos='fade-up' data-aos-delay='300'>
            <h5 className='FooterTitle'>Entreprise</h5>
            <div className='boxLink'>
                <Link href="/privacypolicy"><a>Politiques de Confidentialité</a></Link>
                <Link href="/partner"><a>Ajouter votre Restaurant</a></Link>
                <Link href="/deliver"><a>Devenir Livreur</a></Link>
                <Link href="/ufood"><a>UFood</a></Link>
                
            </div>
        </div>
        <div className='FooterBox4' data-aos='fade-up' data-aos-delay='300'>
            <h5 className='FooterTitle'>Media sociaux</h5>
        <div className='mediaBox'>
            <FaWhatsapp className='Smedia'/>
            <FaLinkedinIn className='Smedia'/>
            <FaTwitter className='Smedia'/>
            <FaFacebookF className='Smedia'/>
        </div>
      </div>
    </section>
  )
}

export default Footer;
