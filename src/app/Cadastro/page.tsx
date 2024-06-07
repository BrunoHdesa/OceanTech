'use client'

import { useState, FormEvent } from 'react';
import Link from "next/link"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import style from '../Cadastro/cadastro.module.css'
import Footer from "../components/Footer/Footer"
import { createUser, UserData } from '../../Services/UserService'; // Importar o serviço de usuário

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!nome || !email || !senha || !confirmarSenha) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        const userData: UserData = { nome, email, senha };

        try {
            setIsLoading(true);
            const response = await createUser(userData);
            console.log('Usuário criado com sucesso:', response);
            setSuccess('Usuário criado com sucesso!');
            setError('');
            setNome('');
            setEmail('');
            setSenha('');
            setConfirmarSenha('');
        } catch (error) {
            console.error('Erro ao criar usuário');
            setError('Erro ao criar usuário');
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
                    <div className={style.cardCadastro}>
                        <h2>Cadastro</h2>
                        <form className={style.containerForm} onSubmit={handleSubmit}>
                            <div className={style.inputContainer}>
                                <label className={style.labelStyle}>Usuario:</label>
                                <input 
                                    className={style.inputStyle} 
                                    type="text" 
                                    placeholder="Digite seu usuario..."
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
                                <label className={style.labelStyle}>Senha:</label>
                                <input 
                                    className={style.inputStyle} 
                                    type="password" 
                                    placeholder="Digite sua senha..."
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label className={style.labelStyle}>Digite a senha novamente:</label>
                                <input 
                                    className={style.inputStyle} 
                                    type="password" 
                                    placeholder="Digite sua senha novamente..."
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                            </div>
                            <div className={style.buttonAlign}>
                                <Button className={style.buttonCriar} type="submit" disabled={isLoading}>
                                    {isLoading ? 'Criando...' : 'Criar'}
                                </Button>
                            </div>
                        </form>
                        {error && <p className={style.errorMessage}>{error}</p>}
                        {success && <p className={style.successMessage}>{success}</p>}
                        <span>Já tem uma conta? Clique <Link href='/Login'>AQUI</Link> para realizar o login.</span>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Cadastro;
