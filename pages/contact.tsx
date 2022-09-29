
import React from 'react';
import BackTopBtn from './components/backToTop/backTopBtn';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { Input, InputGroup, Textarea} from '@chakra-ui/react';

function Contact() {
  return (
    <div>
      <Navbar/>
      <section className='privsection'>
        <div>
          <h1 className='text-4xl font-bold ' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1000">Nous sommes impatients d&apos;avoir de vos nouvelles</h1>
          <p className='xl:w-3/4 mt-6' data-aos='fade-up' data-aos-delay='300'>Nous serons très heureux de vous accompagner dans vos projets et vos défis. Nous nous ferons le plaisir de vous répondre très rapidement.  </p>
        </div>
        <div className=' bg-[#fafaf8] rounded-lg mt-6 grid lg:grid-cols-2 grid-cols-1'>
          <form className='w-full h-[800] shadow-primary px-6 py-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
            <div className='gap-4 flex flex-col '>
              <div>
                <Input placeholder='Nom' size='lg' focusBorderColor='#efedea'/> 
              </div>
              <div>
                  <Input placeholder='Prénom' size='lg' focusBorderColor='#efedea'/>   
              </div>
              <div>
              <InputGroup>
                  <Input type='tel' size='lg' placeholder='Phone number' focusBorderColor='#efedea'/>
              </InputGroup>
              </div>
              <div>
                  <Input placeholder='Email' size='lg' focusBorderColor='#efedea'/>
              </div>
              <div>
                <Textarea placeholder='Votre message ici' focusBorderColor='#efedea' />
              </div>
            </div>
            <button className='devi_btn mt-4' type='submit'>Envouye le message</button>
          </form>
          <div className='bg-[#181818] text-white text-xl p-8 flex flex-col justify-center'>
            <h1 className='text-2xl font-semibold text-[#FFB040]'>Adresse</h1>
            <div className='mt-4'>
              <div className='my-6'>
                <h1 className='font-semibold'>Cameroun</h1>
                <p>UEMPIRE SARL</p>
                <p>Derrière Immeuble Michou, Akwa-Nord, Douala</p>
                <p>+237 694 537 009 - +237 674 872 653</p>
              </div>
              <div className='my-6'>
                <h1 className='font-semibold'>Canada</h1>
                <p>UEMPIRE</p>
                <p>512-2850 Cedarwood Drive, Ottawa, K1V 8Y4</p>
                <p>+1 514 974 1747</p>
              </div>
            </div>
            <h3>info@uempire.ca - www.uempire.ca</h3>
          </div>
        </div>
      </section>
      <BackTopBtn/>
      <Footer/>
    </div>
  )
}

export default Contact;
