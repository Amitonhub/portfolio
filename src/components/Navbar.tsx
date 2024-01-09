import { ALogo } from '@/assets'
import { NavLinks, NavLogos } from '@/constants/NavbarConst'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between sticky items-center'>
            <Link href={'/'}>
                <Image className='hover:cursor-pointer' src={ALogo} alt="logo" />
            </Link>
            <div>
                <ul className="flex items-center"> 
                    {NavLinks.map((nav) => (
                        <li key={nav.id} className="nav-list p-6">{nav.name}</li>
                    ))}
                    {NavLogos.map((logo) => (
                        <Link href={logo.link} key={logo.id}>
                            <li className="nav-list">
                                <Image className="hover:cursor-pointer" src={logo.logo} alt={logo.name || 'social_media_logo'} title={logo.name || 'social_media_handle'}/>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;