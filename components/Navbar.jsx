import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"



const Navbar = () => {
    
    const { data: session } = useSession()
    return (
        <div>
            <nav className='flex flex-row items-center justify-between w-full h-24 bg-transparent px-8'>
                <div className='flex flex-row'>
                    <h1 className='text-3xl font-extrabold font-Poppins text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-700'>Welcome, {session?.user ? session.user.name : 'Guest'}</h1><h1 className='pt-1 pl-2'>👋</h1>
                </div>
                
                <div className='flex space-x-4'>
                    <div>
                        {!session && <div>
                            {/* <h1>Signed in as {session.user.email}</h1> */}
                            <button className='bg-indigo-500 p-2 text-white rounded-md hover:bg-indigo-400 font-Poppins font-medium flex flex-row' onClick={() => signIn()}>Sign In
                                <svg class="w-6 h-6 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                            </button>
                        </div>}
                        {session && 
                        <button className='bg-indigo-500 p-2 text-white rounded-md hover:bg-indigo-400 font-Poppins font-medium flex flex-row' onClick={() => signOut()}>Sign out
                            <svg class="w-6 h-6 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </button>}
                    </div>                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
