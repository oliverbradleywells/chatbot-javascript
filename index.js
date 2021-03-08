const chatElm = document.getElementById('#chat');
conversation.forEach((msg) => {
  const msgElm = document.createElement('div');
  msgElm.className = `message message--${msg.side}`;
  msgElm.innerHTML += `
    <img class="message__head" src="img/$ {msg.name.toLowerCase()}.jpg" />
    <div class="message__text">${msg.text}</div>
    <button class="btn-like">like</button>
  `;

  const likeBtn = msgElm.querySelector('.btn-like');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('.btn-like');
  });

  chatElm.appendChild(msgElm);
});