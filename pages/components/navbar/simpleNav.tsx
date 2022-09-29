import React, { useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {FaBars} from 'react-icons/fa';
import mylogo from '../../assets/blackUE.svg';
import Image from 'next/image';
import {TbWorld} from 'react-icons/tb';


function SimpleNav() {
    const {asPath} = useRouter();

    const [isHideIcon, setisHideIcon] = useState(true);
    const countryClick = () => setisHideIcon (!isHideIcon);
  return (
    <nav className='mynav bg-white'>
        <div className='content'>
            <Link href="/" className='logo'>
                <Image
                    src={mylogo}
                    alt='/'
                    width='160'
                    height='160'
                    priority
                />
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
                                <div className='flex gap-[4px] justify-center items-center'>
                                    <TbWorld className='text-black'/>
                                    <p className='text-black'>FR</p>
                                </div>
                            ):
                            (
                                <div className='flex gap-[4px] justify-center items-center'>
                                    <TbWorld className='text-black'/>
                                    <p className='text-black'>EN</p>
                                </div>
                            )
                        }
                    
                    </div>  
            </ul>
            <div className='mobile-icon'>
                <FaBars/>
            </div>
        </div>
    </nav>
  )
}

export default SimpleNav;