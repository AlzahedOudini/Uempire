/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BackTopBtn from './components/backToTop/backTopBtn';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

function Contact() {
  return (
    <div>
      <Navbar/>
      <section className='privsection'>
        <div>
          <h1 className='text-4xl font-bold ' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">Nous sommes impatients d'avoir de vos nouvelles</h1>
          <p className='xl:w-3/4 mt-6' data-aos='fade-up' data-aos-delay='300'>Tout notre savoir-faire pour une meilleure expérience client !  Contacter nous, et ne vous garantissons un service de qualité. </p>
        </div>
        <div className='p-6 bg-[#fafaf8] rounded-lg mt-6'>
          <form className='bg-red w-full h-[800] shadow-primary' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
            <div className='grid lg:grid-cols-2  gap-3'>
              <input className='form-control bg-[#f2f2f2] p-4  rounded-lg outline-none'  name='user_firstname' placeholder='Entrez votre Nom'  type="text" />
              <input className='form-control bg-[#f2f2f2] p-4 rounded-lg outline-none' name='user_firstname' placeholder='Entrez votre Téléphone'  type="text" />
              <input className='form-control bg-[#f2f2f2] p-4 rounded-lg outline-none' name='user_firstname' placeholder='Entrez votre Email'  type="text" />
              <input className='form-control bg-[#f2f2f2] p-4 rounded-lg outline-none' name='user_firstname' placeholder='Sujet'  type="text" />
              <textarea className='form-control bg-[#f2f2f2] px-6 pt-6 pb-8 rounded-lg outline-none' placeholder='Ecrivez quelque chose'></textarea><br />
            </div>
            <button className='devi_btn mt-4' type='submit'>Envouye le message</button>
          </form>
        </div>
      </section>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default Contact;
