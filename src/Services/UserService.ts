export interface UserData {
    nome: string;
    email: string;
    senha: string;
}

export const createUser = async (userData: UserData) => {
    const response = await fetch('http://localhost:8080/cadastro', { // Substitua pela URL do seu back-end
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar usuário');
    }

    return await response.json();
};
