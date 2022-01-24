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
            <nav className='flex flex-col justify items-center bg-slate-200 h-screen w-56'>
                <div className='bg-slate-300 h-8 w-full'>
                    <button>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </button>
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
            </nav>
        </div>
    )
}

export default Dashboard
