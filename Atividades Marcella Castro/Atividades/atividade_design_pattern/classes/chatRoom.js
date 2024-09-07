class ChatRoom {
    constructor() {
      this.users = [];
    }
  
    // Adiciona um usuário à lista de observadores
    addUser(user) {
      this.users.push(user);
    }
  
    // Remove um usuário da lista de observadores
    removeUser(user) {
      this.users = this.users.filter(u => u !== user);
    }
  
    // Notifica todos os usuários sobre uma nova mensagem
    notifyUsers(message) {
      this.users.forEach(user => user.update(message));
    }
  
    // Envia uma nova mensagem
    sendMessage(message) {
      console.log(`Nova mensagem: ${message}`);
      this.notifyUsers(message);
    }
  }

  export default ChatRoom;