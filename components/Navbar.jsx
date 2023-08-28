"use client"

import Logo from './Logo'
import Navigation from './Navigation'
import { useState } from 'react'

function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    };
    return (
        <header>
            <nav className='fixed top-0 left-0 w-full flex bg-oliva-50 text-oliva-900 justify-between items-center bg-opacity-40' >
                <div className='flex items-center justify-center'>
                    <Logo className='animate-color-change'/>
                    <h1 className="text-4xl font-bold animate-color-change">NefroCentro</h1>
                    
                </div>
                <div className='hidden lg:block lg:h-20'>
                    <Navigation />
                </div>
                <span className="lg:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </span>
            </nav>

            <div className='lg:hidden mt-20'>
                {menuVisible && (
                    <div className='fixed w-full'>
                    <Navigation onClick={toggleMenu} />

                    </div>
                    
                )}
            </div>


        </header>
    )
}

export default Nav
