import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import style from '../Feedback/feedback.module.css'

const Feedback = () => {
    return(
        <>
        <Header/>
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.cardFeedback}>
                    <h2>Feedback</h2>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Nome:</label>
                        <input className={style.inputStyle} type="text" placeholder="Digite seu nome..."></input>
                    </div>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Email:</label>
                        <input className={style.inputStyle} type="email" placeholder="Digite seu email..."></input>
                    </div>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>Avaliação:</label>
                        <input className={style.inputStyleComent} type="text" placeholder="Digite sua avaliação..."></input>
                    </div>
                    <Button>Enviar</Button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Feedback