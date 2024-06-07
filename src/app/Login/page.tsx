'use client'

import { useState, FormEvent } from "react";
import Link from "next/link";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import style from '../Login/Login.module.css';
import Footer from "../components/Footer/Footer";

const Login = () => {
    // State para armazenar os dados de login
    const [loginData, setLoginData] = useState({ usuario: "", senha: "" });
    // State para armazenar mensagens de erro
    const [error, setError] = useState("");

    // Função para lidar com o envio do formulário de login
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Fazer solicitação POST para o endpoint de login da API
            const response = await fetch("http://localhost:8080/cadastro/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            // Verificar se a resposta foi bem-sucedida
            if (response.ok) {
                // Redirecionar o usuário para a página de perfil, por exemplo
                window.location.href = "/perfil";
            } else {
                // Extrair e exibir mensagem de erro da resposta
                const data = await response.json();
                setError(data);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
        }
    };

    // Função para atualizar o estado dos dados de login conforme os campos são preenchidos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return(
        <>
        <Header/>
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.cardLogin}>
                    <h2>Login</h2>
                    {/* Formulário de login */}
                    <form onSubmit={handleSubmit} className={style.containerForm}>
                        {/* Campo de usuário */}
                        <label className={style.labelStyle}>Usuário:</label>
                        <input
                            className={style.inputStyle}
                            type="text"
                            name="usuario"
                            placeholder="Digite seu usuário..."
                            value={loginData.usuario}
                            onChange={handleChange}
                            required
                        />
                        {/* Campo de senha */}
                        <label className={style.labelStyle}>Senha:</label>
                        <input
                            className={style.inputStyle}
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha..."
                            value={loginData.senha}
                            onChange={handleChange}
                            required
                        />
                        {/* Botão de entrada */}
                        <Button type="submit" className={style.buttonEntrar}>Entrar</Button>
                        {/* Exibir mensagem de erro */}
                        {error && <div className={style.error}>{error}</div>}
                    </form>
                    <div className={style.containerSpan}>
                        <span className={style.spanStyle}>Não tem uma conta? Clique <Link href='/Cadastro'>AQUI</Link> para realizar o cadastro.</span>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Login;
