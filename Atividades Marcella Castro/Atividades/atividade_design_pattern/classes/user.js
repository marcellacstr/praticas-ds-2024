class User {
    constructor(name, username, color) {
      this.name = name;
      this.username = username;
      this.color = color; 
      this.createUserElement();
    }
  
    // Método de atualização
    update(message) {
      console.log(`${this.name} recebeu a mensagem: ${message}`);
    }

    // Cria um elemento HTML para o usuário
  createUserElement() {
    this.element = document.createElement('div');
    this.element.className = 'user';
    this.element.style.color = this.color;
    this.element.innerHTML = `<strong>${this.username}</strong>: <span class="messages"></span>`;
    document.body.appendChild(this.element);
  }

  // Atualiza o conteúdo do elemento HTML com a mensagem recebida
  update(message) {
    const messagesSpan = this.element.querySelector('.messages');
    messagesSpan.innerHTML += `<div>${message}</div>`;
    console.log(`${this.name} recebeu a mensagem: ${message}`);
  }
  }

  export default User; 
  