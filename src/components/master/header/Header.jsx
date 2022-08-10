import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import './Header.scss'

function Header() {

    const [Navbar, setNavbar] = useState(false)
    return (
        <>
            <Head />
            <header>
                <div className="container ">
                    {/*<div className="logo">
                        <img src="../images/logo-dark.png" alt="" />
                    </div>*/}
                    <nav>
                        <ul className={Navbar ? 'Navbar' : 'flex'} onClick={() => setNavbar(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/culture'>Culture</Link></li>
                            <li><Link to='/politics'>Politics</Link></li>
                            <li><Link to='/memes'>Memes</Link></li>
                            <li><Link to='/sports'>Sports</Link></li>
                            <li><Link to='/boxed'>Boxed</Link></li>
                            <li><Link to='/reviews'>Reviews</Link></li>
                        </ul>
                        <button className='barIco' onClick={() => setNavbar(!Navbar)}>
                            {Navbar ? <i class="fa-solid fa-angles-up"></i> : <i class="fa-solid fa-angles-down"></i>}
                        </button>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header