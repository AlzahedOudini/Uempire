import React from 'react';
import Link from 'next/link';
import {FaBars} from 'react-icons/fa';
import logo from '../../assets/uempire.svg';
import Image from 'next/image';


function SimpleNav() {
  return (
    <nav className='mynav nbarr'>
        <div className='content'>
            <Link href="/" className='logo'>
                <Image
                    src={logo}
                    alt='/'
                    width='160'
                    height='160'
                    priority
                />
            </Link>
            <ul className='menu'>
                <Link href="/"><li className='NavLink'>Accueil</li></Link>
                <Link href="/about"><li className='NavLink'>A Propos</li></Link>
                <Link href="/services"><li className='NavLink'>Services</li></Link>
                <Link href="/project"><li className='NavLink'>Projets</li></Link>
                <Link href="/contact"><li className='NavLink'>Contact</li></Link>
            </ul>
            <div className='mobile-icon'>
                <FaBars/>
            </div>
        </div>
    </nav>
  )
}

export default SimpleNav;