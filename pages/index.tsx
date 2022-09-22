
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Aboutsec from './components/aboutsec/aboutsec';
import Devis from './components/devis/devis';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Partner from './components/partner/partner';
import Projects from './components/projects/projects';
import ServiceSec from './components/service/serviceSec';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BackTopBtn from './components/backToTop/backTopBtn';

const Home: NextPage = () => {
  useEffect( () =>{
    Aos.init({
      duration: 1500,
      offset: 100
    })
  },[]);
  
  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <title>Uempire</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Navbar/>
      <Hero/>
      <Aboutsec/>
      <ServiceSec/>
      <Partner/>
      <Projects/>
      <Devis/>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default Home;

