import Link from "next/link"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import style from '../Login/Login.module.css'

const Login = () => {
    return(
        <>
        <Header/>
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.cardLogin}>
                    <h2>Login</h2>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Email:</label>
                        <input className={style.inputStyle} type="email" placeholder="Digite seu email..."></input>
                    </div >
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Senha:</label>
                        <input className={style.inputStyle} type="password" placeholder="Digite sua senha..."></input>
                    </div>
                    <Button>Entrar</Button>
                <span>Não tem uma conta? Clique <Link href='/Cadastro'>AQUI</Link> para realizar o cadastro.</span>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login