import Link from "next/link"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import style from '../Cadastro/cadastro.module.css'

const Cadastro = () => {
    return(
        <>
        <Header/>
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.cardCadastro}>
                    <h2>Cadastro</h2>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Nome:</label>
                        <input className={style.inputStyle} type="password" placeholder="Digite sua senha..."></input>
                    </div>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Email:</label>
                        <input className={style.inputStyle} type="email" placeholder="Digite seu email..."></input>
                    </div >
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Senha:</label>
                        <input className={style.inputStyle} type="password" placeholder="Digite sua senha..."></input>
                    </div>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Digite a senha novamente:</label>
                        <input className={style.inputStyle} type="password" placeholder="Digite sua senha..."></input>
                    </div>
                    <Button>Criar</Button>
                <span>Já tem uma conta? Clique <Link href='/Login'>AQUI</Link> para realizar o login.</span>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cadastro