'use client';

import { useState, useEffect } from "react";
import Image from "next/image"
import logo from '../../assets/logo-oceantech.png'
import style from '../Header/Header.module.css'
import Link from "next/link";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <header className={style.cabecalho}>
                <nav className={style.container}>
                    <div>
                        <Link href='/Home'>
                            <Image src={logo} alt="ocean tech logo" className={style.imgLogo} width={180}/>
                        </Link>
                    </div>
                    <div>
                        <ul className={style.containerLista}>
                            <Link href='/Filmes' className={style.Link}>
                                <li className={style.menu}>Filmes</li>
                            </Link>
                            <Link href='/Sobre' className={style.Link}> 
                                <li className={style.menu}>Sobre</li>
                            </Link>
                            <Link href='/Feedback' className={style.Link}>
                                <li className={style.menu}>Feedback</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={style.containerProfile}>
                        <Link href='/Login' className={style.LinkNoResponse}>
                            <span>Login</span>
                        </Link>
                    </div>
                    <div className={style.iconMenu} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <div className={`${style.navMenu} ${menuOpen ? style.open : ''}`}>
                    <Link href='/Filmes' className={`${style.Link} ${style.navItem}`}>
                        <span>Filmes</span>
                    </Link>
                    <Link href='/Sobre' className={`${style.Link} ${style.navItem}`}>
                        <span>Sobre</span>
                    </Link>
                    <Link href='/Feedback' className={`${style.Link} ${style.navItem}`}>
                        <span>Feedback</span>
                    </Link>
                    <Link href='/Login' className={`${style.Link} ${style.navItem}`}>
                        <span>Login</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header