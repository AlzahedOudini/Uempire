import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {FaBars} from 'react-icons/fa';
import logoLight from '../../assets/uempire.svg';
import logoDark from '../../assets/blackUE.svg';
import Image from 'next/image';
import SideBar from './sideBar';
import frensh from '../../assets/country/france.svg';
import kingdom from '../../assets/country/kingdom.svg';
import {TbWorld} from 'react-icons/tb';


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(false);
    const myClick = () => setShow(!show);

    const [isHideIcon, setisHideIcon] = useState(true);
    const countryClick = () => setisHideIcon (!isHideIcon);

    const {asPath} = useRouter();
    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 60){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  return (
    <div className='mynav' data-aos='fade-down' data-aos-delay='300'>
        <nav className={isScrolled ?'mynav scroll' : 'mynav'}>
            <div className='content'>
                <Link href="/" className='logo cursor-pointer'>
                    {isScrolled ? 
                    (
                        <Image
                            src={logoDark}
                            alt='/'
                            width='160'
                            height='160'
                            priority
                            className='immmg'
                        />
                    ): 
                    (
                        <Image
                            src={logoLight}
                            alt='/'
                            width='160'
                            height='160'
                            priority
                            className='immmg'
                        />
                    )}
                    
                </Link>
                <ul className='menu'>
                    
                    
                    <Link href="/"><li className={asPath === "/" ? "NavLink active-link" : "NavLink"}>Accueil</li></Link>
                    <Link href="/about"><li className={asPath === "/about" ? "NavLink active-link" : "NavLink"}>À Propos</li></Link>
                    <Link href="/services"><li className={asPath === "/services" ? "NavLink active-link" : "NavLink"}>Services</li></Link>
                    <Link href="/project"><li className={asPath === "/project" ? "NavLink active-link" : "NavLink"}>Projets</li></Link>
                    <Link href="/contact"><li className={asPath === "/contact" ? "NavLink active-link" : "NavLink"}>Contact</li></Link>

                    <div className=' cursor-pointer flex justify-center items-center  w-[26px] h-[26px] rounded-full ml-10'  onClick={countryClick}>
                        {isHideIcon ? 
                            (
                                isScrolled ? (
                                    <div className='flex gap-[4px] justify-center items-center'>
                                        <TbWorld className='text-black'/>
                                        <p className='text-black'>EN</p>
                                    </div>
                                ):
                                (
                                    <div className='flex gap-[4px] justify-center items-center'>
                                        <TbWorld className='text-white'/>
                                        <p className='text-white'>EN</p>
                                    </div>
                                )
                                
                                
                            ): 
                            (
                                isScrolled ? (
                                    <div className='flex gap-[4px] justify-center items-center'>
                                        <TbWorld className='text-black'/>
                                        <p className='text-black'>FR</p>
                                    </div>
                                ):
                                (
                                    <div className='flex gap-[4px] justify-center items-center'>
                                        <TbWorld className='text-white'/>
                                        <p className='text-white'>FR</p>
                                    </div>
                                )
                                
                            )
                        }
                    
                    </div>  
                      
                </ul>
                <div className='mobile-icon' onClick={myClick}>
                    {!isScrolled ?
                        <FaBars className='text-white hover:text-[#FFB040]'/>: <FaBars className='text-black hover:text-[#FFB040]'/>
                    }
                </div>
                {show && <SideBar myClick={myClick} />}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;


