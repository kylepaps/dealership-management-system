import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Dropdown from './Dropdown'
import Sidebar from './Sidebar'


const Container = (props) => {
    const { children } = props
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })


    return (
        <div className='bg-neutral-100 dark:bg-neutral-900 min-h-screen' >
            <Head>
                <title>Kyle's Auto</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            
                <div className='flex flex-row h-full'>
                    <Sidebar toggle={toggle}/>
                    <div className='flex flex-col h-full'>
                        <Navbar toggle={toggle}/>
                        <Dropdown isOpen={isOpen} toggle={toggle}/>
                        <main className='flex flex-row bg-transparent h-full'>
                            {children}
                        </main>
                    </div>
                </div>
        </div>
    )
}

export default Container
