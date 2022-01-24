import React from 'react'
import Link from 'next/link'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center divide-y px-8' : 'hidden'} onClick={toggle}>
            <Link href="/">
                <a className='p-3 font-Navbar text-xl'>home</a>
            </Link>
            <Link href="/vehicles">
                <a className='p-3 font-Navbar text-xl'>vehicles</a>
            </Link>
            <Link href="/clients">
                <a className='p-3 font-Navbar text-xl'>clients</a>
            </Link>
            <Link href="/issued">
                <a className='p-3 font-Navbar text-xl'>issued</a>
            </Link>
            
        </div>
        
    )
}

export default Dropdown