import React, {useState} from 'react';
import mocks from './assets/mock.svg';
import {BsArrowRightShort} from 'react-icons/bs';
import { Box, Button, Checkbox, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, Textarea  } from '@chakra-ui/react';

import Image from 'next/image';
import mi from './assets/mi.svg';
import victor from './assets/victor.jpg';
import { TbTruckDelivery, TbWorld } from 'react-icons/tb';
import { IoMdBicycle } from 'react-icons/io';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { MdTravelExplore } from 'react-icons/md';
import mockLogin from './assets/muck/mockLogin.svg';
import mockHome from './assets/muck/mockHome.svg';
import mockPanier from './assets/muck/mockPanier.svg';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple, AiOutlineCar, AiOutlineFieldTime, AiOutlineCheckCircle} from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { GiReceiveMoney, GiScooter } from 'react-icons/gi';
import groupp from './assets/groupp.svg';
import FooterOther from './components/footer/footerOther';
import FooterRed from './components/footer/footerRed';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';


function Deliver() {
    /* Changement de texte du français vers l'anglais */
    const [isHideIcon, setisHideIcon] = useState(true);
    const countryClick = () => setisHideIcon (!isHideIcon);
    /* Boite modale pour le formulaire l'inscription */
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [size, setSize] = React.useState('full')

  return (
    <div>
        <nav className=' p-4 px-8 flex justify-between bg-[#252036] lg:px-32'>
            <h1 className='text-[#ffffff] font-bold text-3xl '>UDelivery</h1>
            <div className=' cursor-pointer flex justify-center items-center'  onClick={countryClick}>
                {isHideIcon ? 
                    (
                        <div className='flex gap-[4px] justify-center items-center'>
                            <TbWorld className='text-white'/>
                            <p className='text-white'>FR</p>
                        </div>
                    ):
                    (
                        <div className='flex gap-[4px] justify-center items-center'>
                            <TbWorld className='text-white'/>
                            <p className='text-white'>EN</p>
                        </div>
                    )
                }
                    
            </div>
            {/* <div className='flex gap-4 justify-center items-center'>
                <FaWhatsapp className='text-[#ffffff] transition-all hover:text-[#181818]'/>
                <FaLinkedinIn className='text-[#ffffff] transition-all hover:text-[#181818]'/>
                <FaTwitter className='text-[#ffffff] transition-all hover:text-[#181818]'/>
                <FaFacebookF className='text-[#ffffff] transition-all hover:text-[#181818]'/>
            </div> */}
        </nav>
        <section className="bg-[url('https://img.freepik.com/free-photo/food-delivery-man-with-boxes-with-food_1303-27723.jpg?w=900&t=st=1664379946~exp=1664380546~hmac=e0380de7ed89e6f1d712d581ae25a1ecf1ea59c3394a7f974ec6275d44814dbe')] w-full md:h-[80vh] h-[100vh]  bg-cover bg-no-repeat bg-center   relative my-bg px-8 py-8 lg:px-32 lg:py-12'">
            
        </section>
        <div className='flex  h-auto flex-col justify-center items-center absolute lg:top-[30vh] top-[12rem] text-[#ffffff] text-center  z-10'>
            <div className='w-[100%] md:w-[70%] lg:w-[80%] p-8 font-bold'>
                <h1 className='text-4xl md:text-4xl lg:text-6xl  mb-4'>Livrez avec UDelivery</h1>
                <h4 className='text-xl font-semibold mb-4'>Pas de patron, Des horaires flexibles, Des paiements rapides.
                Vous pouvez générer des revenus en sillonnant les rues de votre ville pour
                    livrer de délicieux repas avec l&apos;application UDelivery.
                </h4>
                
                <div className='py-4'>
                    <button onClick={onOpen} className='p-8 gap-4 text-[#ffffff] md:text-2xl text-xl   rounded-md bg-transparent border-2 border-[#ffffff] hover:border-[#252036] hover:bg-[#252036]  transition-all duration-300'>Postulez maintenant</button>
                </div>
            </div>
        </div>
        <section className='p-8  md:px-8 md:py-8 lg:px-32 lg:py-12 bg-[#ffffff]'>
            <div className=" text-white relative  grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                 <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
               
                    <div className='mb-3'>
                        <AiOutlineFieldTime className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4  text-2xl font-semibold'>Choisissez vos horaires</h1>
                    <p>Vous êtes maître de votre emploi du temps et pouvez adapter votre disponibilité hebdomadaire en fonction de ce qui vous convient.</p>
                
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <GiReceiveMoney className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Soyez payé toutes les semaines</h1>
                    <p>À la fin de chaque semaine, vos gains seront directement déposés sur votre compte chaque semaine.</p>
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <MdTravelExplore className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Redécouvrez votre ville</h1>
                    <p>Profitez du trajet entre la prise en charge et la livraison des commandes pour découvrir toutes les facettes de votre ville.</p>
                </div>
            </div>
        </section>
        <section className='p-8 bg-[#252036] lg:py-16'>
            <h1 className='text-4xl font-semibold text-center text-[#ffffff] my-4 '>Comment ça marche</h1>
            <p className='text-center text-[#ffffff] mb-10'>Une fois que vous avez rejoint Udelivery, voici ce qui vous attend.</p>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute left-[31%] top-[30vh] ' /> </div>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
            <div className='relative grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4'>
            
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>1</div>
                    <h1 className='font-bold text-2xl'>Accepter la course</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>2</div>
                    <h1 className='font-bold text-2xl'>Récupérer la commande au restaurant</h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>

                <div className="flex gap-4 justify-center items-center text-center flex-col text-[#ffffff]">
                    <Image
                        src={mi}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>3</div>
                    <h1 className='font-bold text-2xl'>Livrez et gagnez de l&apos;argent </h1>
                    <p>Ayant activé l&apos;option connecté, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
            </div>
        </section>
        <section className='px-8 py-8 md:px-8 md:py-8 lg:px-32 lg:py-12'>
            <h1 className='text-4xl font-semibold text-center text-[#181818] my-4 '>Ce qu&apos;il faut pour devenir livreur </h1>
            <div className=" text-white relative mt-4  grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                 <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col '>
               
                    <div className='mb-3 flex items-center justify-center'>
                        <AiOutlineCar className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4  text-2xl font-semibold'>Livraison en voiture</h1>
                    <div className='mt-4'>
                        <div className='flex gap-4 mb-2'>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Être âgé d&apos;au moins 19 ans</p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Avoir une voiture à 2 ou 4 portes</p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Avoir un permis de conduire valide à votre nom.</p>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Fournissez votre numéro de sécurité sociale.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col  '>
                    <div className='mb-3 flex items-center justify-center'>
                        <GiScooter className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Livraison en scooter</h1>
                    <div className='mt-4'>
                        <div className='flex gap-4 mb-2'>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Être âgé d&apos;au moins 19 ans</p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Avoir un scooter motorisé</p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Avoir un permis de conduire valide à votre nom.</p>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Fournissez votre numéro de sécurité sociale.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col  '>
                    <div className='mb-3 flex items-center justify-center'>
                        <IoMdBicycle className='text-4xl text-[#252036] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Livraison à vélo ou à pied</h1>
                    <div className='mt-4'>
                        <div className='flex gap-4 mb-2'>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Être âgé d&apos;au moins 18 ans</p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Avoir une pièce d&apos;identité </p>
                        </div>
                        <div className='flex gap-4 mb-2 '>
                            <div className='min-w-10 min-h-10'><AiOutlineCheckCircle className='text-3xl  text-green-600'/></div>
                            <p className='text-left'>Fournir votre numéro de sécurité sociale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='px-8 py-8 lg:px-32 lg:py-12 bg-[#252036] lg:bg-[#fafafa] relative'>
            <div className=" bg-[#252036] md:p-20 rounded-3xl flex h-auto  md:h-[60vh]">
                <div className='flex justify-center flex-col text-center lg:text-left w-[100%] lg:w-[60%]'>
                    <h1 className='text-4xl font-bold text-white mb-4'>Téléchargez l&apos;application <br /> maintenant!</h1>
                    <p className='text-white'>Désormais, vous pouvez vous faire livrer de la nourriture à peu près où que vous soyez grâce à l&apos;application gratuite et conviviale de livraison de nourriture et de plats à emporter.</p>
                    <div className='gap-4 mt-8 grid grid-cols-1 justify-items-center lg:justify-items-start md:grid-cols-2'>
                        
                        <div className=" flex px-4 py-2 gap-4 w-[15rem]  max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><FaGooglePlay className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>Google Play</p>
                            </div>
                        </div>
                        <div className="ml-0 lg:ml-[-5rem] flex px-4 py-2 gap-4 w-[15rem] max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><AiFillApple className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> Télécharger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>App store</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className=' absolute z-50 left-[55%] top-[2rem] hidden  lg:flex'>
                    <Image
                    src={mocks}
                    alt='/'
                    width='500'
                    height='500'
                    priority
                    className='absolute'
                    />
            </div>
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12'>
            <div className='relative  grid  gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                <div className="bg-[url('https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg?w=900')] h-[60vh] drop-shadow-md rounded-xl relative">
                    <div className='text-white grid content-end w-full h-full p-6 bg-[#1818183f] rounded-xl'>
                        <h1 className='capitalize text-2xl font-bold mb-4'>Devenir partenaire</h1>
                        <p className='mb-3'>Rejoignez UFood et touchez plus de clients que jamais. Nous nous occupons de la livraison, vous pouvez donc vous concentrer sur les repas.</p>
                        <Link href="/restaurant">
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#252036] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#252036] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
                <div className="bg-[url('https://img.freepik.com/free-photo/still-life-food-delivery_23-2149198115.jpg?w=900&t=st=1664130228~exp=1664130828~hmac=a18aff56522e57e453bb5ffee1873f064b2f014a8b1713de1a4a830f0f4fc641')] h-[60vh] drop-shadow-md rounded-xl relative bg-no-repeat bg-center bg-cover">
                    <div className='text-white grid content-end w-full h-full p-6 bg-[#1818183f] rounded-xl'>
                        <h1 className='capitalize text-2xl font-bold mb-4'>Une petite faim ? </h1>
                        <p className='mb-3'>Faites vous livré vos menus préférés du restaurant à votre porte en un fraction de seconde !</p>
                        <Link href="/ufood">
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#252036] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#252036] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12'>
            <h1 className='text-4xl font-semibold text-center text-[#181818] my-4 '>Questions fréquentes</h1>
            <div className='flex justify-center py-4'>
                <div className='w-full md:w-[80%]'>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem >
                            <h2 >
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quelles sont les conditions requises pour être un livreur
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quels sont les documents dont j&apos;ai besoin ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Comment suis-je payé ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#252036' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Puis-je livrer avec mon propre véhicule ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
        <section className='w-full py-14 px-8 bg-[#e7e7e7]'>
            <div className='flex flex-col justify-center text-center items-center text-[#181818] '>
                <h1 className='text-5xl mb-4 font-semibold'>Prêt à embarquer ?</h1>
                <p className='mb-4'>Rejoins-nous dès aujourd’hui !</p>
                
                <div>
                <button onClick={onOpen} className='px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] rounded-md transition-all duration-300'>Postulez dès maintenant</button>
                    
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                        size={size}
                    >
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>S&apos;enregistrer</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6} className='bg-scroll flex justify-center '>
                            <form className='bg-red w-full md:w-[50%] mt-6 shadow-primary' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
                                <div className=''>
                                    
                                    <div className='mb-4'>
                                        <Input placeholder='Prénom' size='lg' focusBorderColor='#efedea'/> 
                                    </div>
                                    <div className='mb-4'>
                                        <Input placeholder='Nom' size='lg' focusBorderColor='#efedea'/>   
                                    </div>
                                    <div className='mb-4'>
                                    <InputGroup>
                                        <Input type='tel' size='lg' placeholder='Phone number' focusBorderColor='#efedea'/>
                                    </InputGroup>
                                    </div>
                                    <div className='mb-4'>
                                        <Input placeholder='Email' size='lg' focusBorderColor='#efedea'/>
                                    </div>
                                    <div className='mb-4'>
                                        <Input placeholder='Pays' size='lg' focusBorderColor='#efedea'/>
                                    </div>
                                    <div className='mb-4'>
                                        <Select placeholder='Ville' size='lg' focusBorderColor='#efedea' >
                                            <option value='option1'>Douala</option>
                                            <option value='option2'>Yaoundé</option>
                                            <option value='option3'>Bafoussam</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='block w-full mb-4'>
                                            <p>CNI Recto*</p>
                                            <input type="file"  className='bg-[#eeeeee] w-full p-4 rounded-lg px-4 mytextfiel' name='user_firstname' placeholder='cni'/>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='block w-full mb-4'>
                                            <p>CNI Verso*</p>
                                            <input type="file"  className='bg-[#eeeeee] w-full p-4 rounded-lg px-4 mytextfiel' name='user_firstname' placeholder='cni'/>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='block w-full mb-4'>
                                            <p>Permi de conduire*</p>
                                            <input type="file"  className='bg-[#eeeeee] w-full p-4 rounded-lg px-4 mytextfiel' name='user_firstname' placeholder='Permi'/>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='block w-full mb-4'>
                                            <p>Plan de localisation*</p>
                                            <input type="file"  className='bg-[#eeeeee] w-full p-4 rounded-lg px-4 mytextfiel' name='user_firstname' placeholder='Permi'/>
                                        </label>
                                    </div>
                                    <div className='mb-4 mt-4'>
                                        <label htmlFor="" className='block w-full mb-4'>
                                            <p>Message</p>
                                            <Textarea placeholder='Votre message ici' focusBorderColor='#efedea' />
                                        </label>
                                    </div>
                                    <h1 className='my-4 text-3xl font-semibold text-center mt-4'>Personne à contacter en cas d&apos;urgence</h1>
                                    <div className='mb-4'>
                                        <Input placeholder='Prénom' size='lg' focusBorderColor='#efedea'/> 
                                    </div>
                                    <div className='mb-4'>
                                        <Input placeholder='Nom' size='lg' focusBorderColor='#efedea'/>   
                                    </div>
                                    <div className='mb-4'>
                                    <InputGroup>
                                        <Input type='tel' size='lg' placeholder='Phone number' focusBorderColor='#efedea'/>
                                    </InputGroup>
                                    </div>
                                    {/* <div className='flex gap-2 items-start mt-4'>
                                        <Checkbox colorScheme='red' size='lg' className='mt-1'></Checkbox>
                                        <p className='text-[14px] '>J&apos;accepte les conditions d&apos;utilisation et le faite 
                                            que mes données peuvent être utilisées à des fins publicitaires</p>
                                    </div> */}
                                </div>
                                <div className='w-full flex justify-center items-center mt-4'>
                                    <button className='w-full text-center px-8 py-4 gap-4 text-[#ffffff] bg-[#252036] border-[#252036] border-2 hover:text-[#252036]  hover:bg-transparent transition-all  rounded-md mt-4 ' type='submit'>Enregistrer</button>

                                </div>
                            </form>
                        </ModalBody>

                        
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </section>
        <FooterOther/>  
    </div>
  )
}

export default Deliver;
