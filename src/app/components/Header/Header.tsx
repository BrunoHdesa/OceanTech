import Image from "next/image"
import logo from '../../assets/logo-oceantech.png'
import style from '../Header/Header.module.css'
import Link from "next/link";


const Header = () => {
    return(
        <>
            <header className={style.cabecalho}>
                <nav className={style.container}>
                    <div>
                        <Link href='/Home'>
                            <Image src={logo} alt="ocean tech logo" width={180}/>
                        </Link>
                    </div>
                    <div>
                        <ul className={style.containerLista}>
                            <Link href='/Produtos' className={style.Link}>
                                <li className={style.menu}>Produtos</li>
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
                        <Link href='/Login' className={style.Link}>
                            <span>Login</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header