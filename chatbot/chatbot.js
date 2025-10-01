document.addEventListener('DOMContentLoaded', () => {
    const chatbotBody = document.getElementById('chatbot-body');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    if (!chatbotBody || !chatbotInput || !chatbotSendBtn) {
        console.error("Elemen chatbot tidak ditemukan. Pastikan ID sudah benar.");
        return;
    }

    const addMessage = (message, sender) => {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('chat-message', `${sender}-message`);
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = message;
        messageWrapper.appendChild(messageParagraph);
        chatbotBody.appendChild(messageWrapper);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    };

    const handleSendMessage = () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;

        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        setTimeout(() => {
            let botResponse = "Maaf, saya belum mengerti. Tim kami akan segera membantu Anda. Sementara itu, Anda bisa cek halaman FAQ kami.";
            if (userMessage.toLowerCase().includes('adopsi')) {
                botResponse = "Anda tertarik adopsi? Anda bisa melihat hewan yang tersedia di halaman 'Hewan Adopsi'. Apa ada jenis hewan spesifik yang Anda cari?";
            } else if (userMessage.toLowerCase().includes('kucing')) {
                botResponse = "Kami punya banyak kucing lucu! Coba gunakan fitur pencarian di Beranda untuk menemukan teman impianmu.";
            } else if (userMessage.toLowerCase().includes('halo') || userMessage.toLowerCase().includes('hai')) {
                 botResponse = "Halo juga! Senang bertemu denganmu. Ada yang bisa saya bantu?";
            }
            
            addMessage(botResponse, 'bot');
        }, 1200);
    };

    chatbotSendBtn.addEventListener('click', handleSendMessage);
    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });
});