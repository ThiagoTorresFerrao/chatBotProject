const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMain = document.getElementById('chat-main');

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', sender);
  messageDiv.textContent = text;
  chatMain.appendChild(messageDiv);
  chatMain.scrollTop = chatMain.scrollHeight;
}

function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  for (const qa of qaList) {
    for (const pattern of qa.patterns) {
      if (msg.includes(pattern)) {
        return qa.response;
      }
    }
  }

  return "Desculpe, não entendi. Pode tentar outra coisa?";
}

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, 'user');
  chatInput.value = '';

  setTimeout(() => {
    const botReply = getBotResponse(userMessage);
    addMessage(botReply, 'bot');
  }, 600);
});
