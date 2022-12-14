import React, {useState} from 'react';
import membership from "./assets/membership.svg"
import {FaUsers, FaWhatsapp} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { Box, Button, Checkbox, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { BsShop } from 'react-icons/bs';
import Image from 'next/image';
import victor from './assets/victor.jpg';
import { TbTruckDelivery, TbWorld } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import mockLogin from './assets/muck/mockLogin.svg';
import mockHome from './assets/muck/mockHome.svg';
import mockPanier from './assets/muck/mockPanier.svg';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import groupp from './assets/groupp.svg';
import myUfood from './assets/logo/myUfood.svg';
import FooterRed from './components/footer/footerRed';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

function Ufood() {
    const [isHideIcon, setisHideIcon] = useState(true);
    const countryClick = () => setisHideIcon (!isHideIcon);
  return (
    <div>
        <nav className=' p-4 px-8 flex justify-between bg-[#F60D2B] lg:px-32 '>
            <h1 className='text-[#ffffff] font-bold text-3xl '>UFood.</h1>
            {/* <Image
                src={myUfood}
                alt='/'
                width='60'
                height='60'
                priority
                className='immmg'
            /> */}
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
        </nav>
        <section className="bg-[url('https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=900&t=st=1663959889~exp=1663960489~hmac=e71108d438abffb0c80fc44a8eb49015b63d20afcb7c084520dd20dee36e88e1')] w-full h-[40vh] sm:h-[30vh]  bg-cover bg-no-repeat bg-center sm:min-h-[30vh] md:min-h-[50vh] lg:min-h-[80vh] relative">
            <div className=' bg-black z-10 opacity-30  h-full'></div>
            
            
        </section>
        <section className=' sm:py-16 bg-[#fafafa] '>
            <div className='lg:w-[70%] lg:mt-[-2rem] text-center lg:text-left text-[#181818] p-8 lg:px-32 lg:py-12 font-bold'>
                <h1 className='text-4xl  mb-4'><strong className='text-[#F60D2B]'>Commandez</strong> et faites vous <strong className='text-[#F60D2B]'>livrer</strong> avec UFood. </h1>
                <p className='text-[#181818] '>Vos menus pr??f??r??s du restaurant ?? votre porte en un fraction de seconde !</p>
            </div>
        </section>
        <section className='flex justify-center items-center py-8 md:p-0 bg-[#fafafa]'>
            <div className='w-[60vh] p-8 lg:top-[3%] lg:right-32  lg:min-w-[60vh]  lg:w-[60vh] shadow-lg rounded-xl bg-white lg:absolute'>
                <h1 className='text-2xl font-bold text-[#181818] my-2 text-center'>Rejoignez-nous maintenant !</h1>
                <form className='bg-red w-full  mt-6 shadow-primary' data-aos='fade-up' data-aos-delay='300' data-aos-duration="2000">
                    <div className=''>
                        
                        <div className='mb-4'>
                            <Input placeholder='Pr??nom' size='lg' focusBorderColor='#efedea'/> 
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
                        <div className='mb-6'>
                            <Select placeholder='Ville' size='lg' focusBorderColor='#efedea' >
                                <option value='option1'>Douala</option>
                                <option value='option2'>Yaound??</option>
                                <option value='option3'>Bafoussam</option>
                            </Select>
                        </div>
                        <div className='flex gap-2 items-start '>
                            <Checkbox colorScheme='red' size='lg' className='mt-1'></Checkbox>
                            <p className='text-[14px] '>J&apos;accepte les conditions d&apos;utilisation et le faite 
                                que mes donn??es peuvent ??tre utilis??es ?? des fins publicitaires</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center mt-4'>
                        <button className='w-full text-center px-8 py-4 gap-4 text-[#ffffff] bg-[#F60D2B]  hover:bg-transparent transition-all hover:text-[#F60D2B] border-2 border-[#F60D2B] rounded-md mt-4 ' type='submit'>Rejoignez-nous maintenant!</button>

                    </div>
                </form>
            </div>
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12  lg:mt-[-5rem] bg-[#fafafa]'>
            {/* <div className='flex justify-center items-center w-full'>
            <h1 className='mb-8 text-4xl w-[70%] font-semibold text-center text-[#181818]'>UFood est votre porte d&apos;entr??e pour g??rer votre <strong className='text-[#F60D2B]'>activit?? </strong> de <strong className='text-[#F60D2B]'>livraison.</strong></h1>

            </div> */}
            <div className=" text-white relative  grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                 <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
               
                    <div className='mb-3'>
                        <BsShop className='text-4xl text-[#F60D2B] font-bold '/>
                    </div>
                    <h1 className='my-4  text-2xl font-semibold'>Choisis un restaurant</h1>
                    <p>Nous vous proposons les menus de plus de 250 restaurants de livraison en ligne.</p>
                
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <MdOutlineFastfood className='text-4xl text-[#F60D2B] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Choisis un plat savoureux</h1>
                    <p>Nous vous proposons les menus de plus de 250 restaurants de livraison en ligne.</p>
                </div>
                <div className='bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-8 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <TbTruckDelivery className='text-4xl text-[#F60D2B] font-bold '/>
                    </div>
                    <h1 className='my-4 text-2xl font-semibold'>Livraison</h1>
                    <p>Faites-vous livrer vos repas ! Et profitez de votre repas ! Payez en ligne ou ?? la livraison</p>
                </div>
            </div>
           
        </section>
        <section className='px-8 py-8 bg-[#F60D2B] lg:py-16'>
            <h1 className='text-4xl font-semibold text-center text-[#ffffff] my-4 '>Comment ??a marche</h1>
            <p className='text-center text-[#ffffff] mb-10'>Une fois que vous avez rejoint Ufood, voici ce qui vous attend.</p>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute left-[31%] top-[30vh] ' /> </div>
            <div className=" justify-center items-center relative hidden lg:flex"> <HiOutlineArrowRight className='text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
            <div className='relative grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4'>
            
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mockLogin}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>1</div>
                    <h1 className='font-bold text-2xl'>Inscrivez vous</h1>
                    <p>Ayant activ?? l&apos;option connect??, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>
                <div className="flex gap-4 justify-center items-center text-center  flex-col text-[#ffffff]">
                    <Image
                        src={mockHome}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>2</div>
                    <h1 className='font-bold text-2xl'>Recherchez un repas</h1>
                    <p>Ayant activ?? l&apos;option connect??, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
                <div className="flex justify-center items-center relative lg:hidden"> <HiOutlineArrowRight className='rotate-90 text-6xl text-[#ffffff] lg:absolute right-[31%] top-[30vh]' /> </div>

                <div className="flex gap-4 justify-center items-center text-center flex-col text-[#ffffff]">
                    <Image
                        src={mockPanier}
                        alt='/'
                        width='800'
                        height='800'
                        priority
                    />
                    <div className='p-6 w-8 h-8 border border-white rounded-full flex items-center justify-center'>3</div>
                    <h1 className='font-bold text-2xl'>Ajoutez au panier </h1>
                    <p>Ayant activ?? l&apos;option connect??, vous recevrez des courses et vous pouver l&apos;accepter</p>
                </div>
            </div>
        </section>
        <section className='w-full  bg-[#fafafa] px-8 py-8 lg:px-32 lg:py-12'>
            <h1 className='text-4xl mb-4 font-semibold text-center text-[#181818]'>T??moignages</h1>
            <p className='text-center text-[#181818] mb-10'>Ce que pensent nos clients apr??s avoir connu UFood</p>
            <div className='w-full  text-white relative  grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
                <div className='rounded-md bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>Le premier travail que j&apos;appr??cie vraiment. Travailler ?? l&apos;ext??rieur me procure un sentiment de libert??.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Babbel Kitio</h1>
                </div>
                <div className='rounded-md bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>J&apos;aime le fait que je puisse planifier mon propre temps, et la route offre beaucoup d&apos;exp??rience qu&apos;on ne peut pas acqu??rir autrement.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Victor Urbain</h1>
                </div>
                <div className='rounded-md bg-[#ffffff] drop-shadow-md text-[#181818] text-center p-6 flex flex-col justify-center items-center'>
                
                    <Image
                        src={victor}
                        alt='/'
                        width='100'
                        height='100'
                        priority
                        className='rounded-full mb-6'
                    />
                    <p className='mt-6'>J&apos;aime la flexibilit?? qu&apos;offre ce travail et j&apos;aime ??tre au grand air.</p>
                    <h1 className='my-4  text-1xl font-semibold text-[#F60D2B]'>Alzahed Oudini</h1>
                </div>
            </div>
        </section>
        <section className='px-8 py-8 md:px-8 md:py-8 lg:px-32 lg:py-12 flex flex-col lg:flex-row relative gap-4'>
            <div className='bg-[#F60D2B] w-[100%] lg:w-[30%] flex flex-col p-8 text-white text-center rounded-xl'>
                <div className='flex justify-center items-center mb-10 drop-shadow-md'>
                    <Image
                        src={membership}
                        alt='/'
                        width='120'
                        height='120'
                    />
                </div>
                <h1 className=' text-3xl font-bold mb-4'>UFood Membership</h1>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur non amet autem porro. Voluptatum, quaerat asperiores aliquid maxime earum cum repudiandae ducimus tenetur sunt, a praesentium nobis esse odit!</p>
            </div>
            <div className='h-auto  md:h-[80vh] w-[100%] lg:w-[70%] '>
                <div className='grid  gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 content-center h-full'>
                    <div className='flex flex-col justify-center items-center bg-white drop-shadow-md rounded-md p-4 place-self-start'>
                        <div className='p-4 rounded-full bg-[#F60D2B]'><FaUsers className='text-4xl text-white'/></div>
                        <p className='px-8 py-2 text-xl font-bold text-[#F60D2B]  '>2.000 FCFA</p>
                        <h1 className='text-xl font-bold'>Argent</h1>
                        <p className='text-center'>En choisissant cette option, vous aves droit ?? 15 livraisons gratuites au cours du mois.</p>
                        
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white drop-shadow-md rounded-md p-4'>
                        <div className='p-4 rounded-full bg-[#F60D2B]'><FaUsers className='text-4xl text-white'/></div>
                        <p className='px-8 py-2 text-xl font-bold text-[#F60D2B]  '>10.000 FCFA</p>
                        <h1 className='text-xl font-bold'>Diamand</h1>
                        <p className='text-center'>En choisissant cette option, vous aves droit ?? 15 livraisons gratuites au cours du mois.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white drop-shadow-md rounded-md p-4'>
                        <div className='p-4 rounded-full bg-[#F60D2B]'><FaUsers className='text-4xl text-white'/></div>
                        <p className='px-8 py-2 text-xl font-bold text-[#F60D2B]  '>5.000 FCFA</p>
                        <h1 className='text-xl font-bold'>Or</h1>
                        <p className='text-center'>En choisissant cette option, vous aves droit ?? 15 livraisons gratuites au cours du mois.</p>
                    </div>
                </div>
            </div>
            
        </section>
        <section className='px-8 py-8 lg:px-32 lg:py-12 bg-[#F60D2B] lg:bg-[#fafafa] relative'>
            <div className=" bg-[#F60D2B] md:p-20 rounded-3xl flex h-auto  md:h-[60vh]">
                <div className='flex justify-center flex-col text-center lg:text-left w-[100%] lg:w-[60%]'>
                    <h1 className='text-4xl font-bold text-white mb-4'>T??l??chargez l&apos;application <br /> maintenant!</h1>
                    <p className='text-white'>D??sormais, vous pouvez vous faire livrer de la nourriture ?? peu pr??s o?? que vous soyez gr??ce ?? l&apos;application gratuite et conviviale de livraison de nourriture et de plats ?? emporter.</p>
                    <div className='gap-4 mt-8 grid grid-cols-1 justify-items-center lg:justify-items-start md:grid-cols-2'>
                        
                        <div className=" flex px-4 py-2 gap-4 w-[15rem]  max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><FaGooglePlay className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> T??l??charger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>Google Play</p>
                            </div>
                        </div>
                        <div className="ml-0 lg:ml-[-5rem] flex px-4 py-2 gap-4 w-[15rem] max-w-[15rem] bg-[#ffffff] text-[#181818] rounded-md items-center justify-center   cursor-pointer">
                            <div className=''><AiFillApple className='text-4xl'/></div>
                            <div className=' flex justify-center flex-col'>
                                <p> T??l??charger sur</p>
                                <p className='text-2xl font-bold text-[#181818]'>App store</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className=' absolute z-50 left-[55%] top-[2rem] hidden  lg:flex'>
                    <Image
                    src={groupp}
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
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#F60D2B] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#F60D2B] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
                <div className="bg-[url('https://t4.ftcdn.net/jpg/04/40/78/97/240_F_440789709_GHRbevFGncnsXBml2VE4A7lzreq9fX8B.jpg')] h-[60vh] drop-shadow-md rounded-xl relative bg-no-repeat bg-center bg-cover">
                    <div className='text-white grid content-end w-full h-full p-6 bg-[#1818183f] rounded-xl'>
                        <h1 className='capitalize text-2xl font-bold mb-4'>Livrez avec nous</h1>
                        <p className='mb-3'>La libert?? d&apos;adapter le travail ?? votre vie. Sans oublier des honoraires, des avantages et des remises exceptionnels.</p>
                        <Link href="/deliver">
                            <button className='flex gap-2 justify-center items-center text-[#181818] px-6 py-4 bg-white  hover:bg-[#F60D2B] transition-all group hover:text-white rounded-md w-[12rem] max-w-[12rem]'>Commencer <BsArrowRightShort className='text-[#F60D2B] transition-all group-hover:text-white text-2xl'/></button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
        
        <section className='px-8 py-8 lg:px-32 lg:py-12'>
            <h1 className='text-4xl font-semibold text-center text-[#181818] my-4 '>Questions fr??quentes</h1>
            <div className='flex justify-center py-4'>
                <div className='w-full md:w-[80%]'>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem >
                            <h2 >
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#F60D2B' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Comment fonctionne la livraison avec UFood ?
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
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#F60D2B' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quelles sont les villes que supporte UFood ?
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
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#F60D2B' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Quels sont les d??lais de livraison ?
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
                            <AccordionButton _expanded={{ bg: 'transparent', color: '#F60D2B' }}>
                                <Box flex='1' textAlign='left' className='text-[1.25rem] font-bold'>
                                Puis-je modifier mon adresse de livraison ?
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
                <h1 className='text-4xl mb-4 font-semibold'>Viens vivre l&apos;exp??rience</h1>
                <p className='mb-4'>Rejoins-nous d??s aujourd???hui !</p>
                <Link href="/ufood" ><button className='px-8 py-4 gap-4 text-[#ffffff] bg-[#F60D2B] rounded-md transition-all duration-300'>Postulez d??s maintenant </button></Link>
            </div>
        </section>
        <FooterRed/> 
    </div>
  )
}

export default Ufood;
