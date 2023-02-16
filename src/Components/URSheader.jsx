import React, { useState } from 'react';
import Navbar from './URShomeHead';
import URSmobileHeader from './URSmobileHeader';
import URSscrollHeader from './URSscrollHeader';

export default function Header() {
    const [showMenu,setShowMenu] = useState(false);
    window.addEventListener('scroll',() => {
        if (scrollY >= 100) {
            setShowMenu(true)
        }else if (scrollY < 100){
            setShowMenu(false)
        }
    })
    return (
        <>
            <header>
                { showMenu ? <URSscrollHeader /> : null }
                <div className='container'>
                    <Navbar />
                    <URSmobileHeader />
                </div>{/* .container */}
            </header>
        </>
    )
}
