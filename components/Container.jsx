import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Dropdown from './Dropdown'
import Sidebar from './Sidebar'


const Container = (props) => {
    const { children } = props
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    // useEffect(() => {
    //     const hideMenu = () => {
    //         if (window.innerWidth > 768 && isOpen) {
    //             setIsOpen(false)
    //         }
    //     }
    //     window.addEventListener('resize', hideMenu)
    //     return () => {
    //         window.removeEventListener('resize', hideMenu)
    //     }
    // })


    return (
        <div className='bg-neutral-100 dark:bg-neutral-900 min-h-screen' >
            <Head>
                <title>Kyle's Auto</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            
                <div className='flex flex-row h-full'>
                    <Sidebar isOpen={isOpen} toggle={toggle}/>
                    
                    <div className={isOpen ? 'flex flex-col h-full w-full' : 'flex flex-col h-full w-closedsidebar'}>
                        <Navbar toggle={toggle}/>
                        {/* <Dropdown isOpen={isOpen} toggle={toggle}/> */}
                        <main className={isOpen ? 'flex flex-row bg-transparent h-body overflow-auto' : 'flex flex-row bg-transparent h-body w-full overflow-auto'}>
                            {children}
                        </main>
                    </div>
                </div>
        </div>
    )
}

export default Container
