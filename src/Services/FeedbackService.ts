export interface FeedbackData {
    nome: string;
    email: string;
    avaliacao: string;
}

export const createFeedback = async (feedbackData: FeedbackData) => {
    const response = await fetch('http://localhost:8080/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar feedback');
    }

    return await response.json();
};

