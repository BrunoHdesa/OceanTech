'use client'

import { useState, FormEvent } from 'react';
import Header from "../components/Header/Header";
import style from '../Feedback/feedback.module.css';
import Button from "../components/Button/Button";
import Footer from '../components/Footer/Footer';
import { createFeedback, FeedbackData } from '../../Services/FeedbackService'; // Importar o serviço de feedback

const Feedback = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!nome || !email || !avaliacao) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        const feedbackData: FeedbackData = { nome, email, avaliacao };

        try {
            setIsLoading(true);
            const response = await createFeedback(feedbackData);
            console.log('Feedback enviado com sucesso:', response);
            setSuccess('Feedback enviado com sucesso!');
            setError('');
            setNome('');
            setEmail('');
            setAvaliacao('');
        } catch (error) {
            console.error('Erro ao enviar feedback');
            setError('Erro ao enviar feedback');
            setSuccess('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header/>
            <section className={style.sectionContainer}>
                <div className={style.container}>
                    <div className={style.cardFeedback}>
                        <h2>Feedback</h2>
                        <form className={style.containerForm} onSubmit={handleSubmit}>
                            <div className={style.inputContainer}>
                                <label className={style.labelStyle}>Nome:</label>
                                <input 
                                    className={style.inputStyle} 
                                    type="text" 
                                    placeholder="Digite seu nome..."
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label className={style.labelStyle}>Email:</label>
                                <input 
                                    className={style.inputStyle} 
                                    type="email" 
                                    placeholder="Digite seu email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label className={style.labelStyle}>Avaliação:</label>
                                <input 
                                    className={style.inputStyleComent} 
                                    type="text" 
                                    placeholder="Digite sua avaliação..."
                                    value={avaliacao}
                                    onChange={(e) => setAvaliacao(e.target.value)}
                                />
                            </div>
                            <div className={style.buttonAlign}>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? 'Enviando...' : 'Enviar'}
                                </Button>
                            </div>
                        </form>
                        {error && <p className={style.errorMessage}>{error}</p>}
                        {success && <p className={style.successMessage}>{success}</p>}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Feedback;
