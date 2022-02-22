import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'


const Dashboard = ({toggle}) => {
    const router = useRouter();
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <div>
            <nav className='flex flex-col justify items-center bg-gray-50 bg-opacity-30 rounded-r-xl h-screen w-56'>
                <div className='flex flex-col py-16 h-full w-full border-r-2'>
                    <div className='items-center justify-center h-16'>
                        <h1>Kyle's Auto</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='/vehicles'>
                            <a>Vehicles</a>
                        </Link>
                        <Link href='/issued'>
                            <a>Issued</a>
                        </Link>
                        <Link href='/clients'>
                            <a>Clients</a>
                        </Link>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default Dashboard
