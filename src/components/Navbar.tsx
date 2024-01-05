import { ALogo } from '@/assets'
import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between sticky'>
            <Link href={'/'}>
                <Image className='hover:cursor-pointer' src={ALogo} alt="logo" />
            </Link>
            <div>
                <ul className="grid grid-cols-5 gap-x-4">
                    {NavLinks.map((nav) => {
                        return (
                            <li key={nav.id} className="bg-gray-100 p-3 rounded-md text-center hover:cursor-pointer">{nav.name}</li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
