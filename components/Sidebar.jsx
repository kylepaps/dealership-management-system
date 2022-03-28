import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Sidebar = ({isOpen, toggle}) => {
    const router = useRouter()


    return (
        <div >
            <div className={isOpen ? '' : 'hidden'}>
            <nav className='flex flex-col items-center bg-neutral-200 h-full min-h-screen w-56'>
            
                <div className='flex flex-col justify-center h-24 w-full px-5'>
                    <div className='flex flex-row justify-between h-full border-b-2 border-indigo-400'>     
                        <div className='flex items-center bg-indigo-700 p-6 my-4 rounded-lg'>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        <div className='pl-2'>
                            <h1 className='font-Poppins font-medium text-xl text-white'>K-Auto</h1>
                            <h1 className='font-Poppins font-light text-sm text-white'>CRM</h1>
                        </div>
                        </div>   
                        <div className='items-center flex'>             
                        <button onClick={toggle}>
                            <svg className="w-6 h-6 hover:text-indigo-400 text-indigo-900 items-end flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        </div>    
                    </div>
                    
                </div>
                <div className='flex flex-col items-center py-12 w-full h-80 justify-between'>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-indigo-700 h-full': 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-transparent h-full'}>
                            <svg className={router.pathname === '/' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h1 className={router.pathname === '/' ? 'font-Poppins font-semibold text-indigo-700': 'font-Poppins font-semibold'}>Dashboard</h1>
                        </a>
                    </Link>
                    <Link href='/vehicles'>
                        <a className={router.pathname === '/vehicles' ? 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-indigo-700 h-full': 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-transparent h-full'}>
                            <svg className={router.pathname === '/vehicles' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            <h1 className={router.pathname === '/vehicles' ? 'font-Poppins font-semibold text-indigo-700': 'font-Poppins font-semibold'}>Vehicles</h1>
                        </a>
                    </Link>
                    <Link href='/issued'>
                        <a className={router.pathname === '/issued' ? 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-indigo-700 h-full': 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-transparent h-full'}>
                            <svg className={router.pathname === '/issued' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                            <h1 className={router.pathname === '/issued' ? 'font-Poppins font-semibold text-indigo-700': 'font-Poppins font-semibold'}>Issued</h1>
                        </a>
                    </Link>
                    <Link href='/clients'>
                        <a className={router.pathname === '/clients' ? 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-indigo-700 h-full': 'flex flex-row w-full px-12 justify-start items-center space-x-2 border-r-4 border-transparent h-full'}>
                            <svg className={router.pathname === '/clients' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <h1 className={router.pathname === '/clients' ? 'font-Poppins font-semibold text-indigo-700': 'font-Poppins font-semibold'}>Clients</h1>
                        </a>
                    </Link>
                </div>
            </nav> 
            </div>
            <div className={isOpen ? 'hidden' : 'flex flex-col items-center bg-neutral-200 h-full min-h-screen w-12'}>
                <div className='h-24 justify-end flex'>
                    <button className='items-center' onClick={toggle}>
                        <svg className="w-6 h-6 hover:text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> 
                </div>
                <div className='flex flex-col items-center py-12 w-full h-80 justify-between'>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-indigo-700 h-full': 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-transparent h-full'}>
                            <svg className={router.pathname === '/' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </a>
                    </Link>
                    <Link href='/vehicles'>
                        <a className={router.pathname === '/vehicles' ? 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-indigo-700 h-full': 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-transparent h-full'}>
                            <svg className={router.pathname === '/vehicles' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                        </a>
                    </Link>
                    <Link href='/issued'>
                        <a className={router.pathname === '/issued' ? 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-indigo-700 h-full': 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-transparent h-full'}>
                            <svg className={router.pathname === '/issued' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                        </a>
                    </Link>
                    <Link href='/clients'>
                        <a className={router.pathname === '/clients' ? 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-indigo-700 h-full': 'flex flex-row w-full justify-center items-center space-x-2 border-r-2 border-transparent h-full'}>
                            <svg className={router.pathname === '/clients' ? 'w-5 h-5 text-indigo-700' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </a>
                    </Link>
                </div>
                
            </div>  
        </div>
        
    )
}

export default Sidebar
