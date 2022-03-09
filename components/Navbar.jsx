import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'



const Navbar = ({toggle}) => {
    
    const router = useRouter();
    
    let route = router.pathname
    if (route === '/') {
        route = 'Dashboard'
    } else {
        route = route.slice(1)[0].toUpperCase() + route.slice(2)
    }
    
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    
    return (
        <div>
            <nav className='flex flex-row items-center justify-between w-full h-24 bg-transparent px-8'>
                <div className='flex flex-row'>
                    <h1 className='text-3xl font-extrabold font-Poppins text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-700'>Welcome, Kyle</h1><h1 className='pt-1 pl-2'>👋</h1>
                </div>
                
                <div className='flex space-x-4'>
                    <button onClick={() => setTheme(theme==='light'?'dark':'light')}>
                        <svg className='w-6 h-6 hover:text-indigo-600' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {mounted && (theme==='light'?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            :<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />)}
                        </svg>
                    </button>
                    <h1 className='bg-slate-100 rounded-md p-1'>Sign In</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
