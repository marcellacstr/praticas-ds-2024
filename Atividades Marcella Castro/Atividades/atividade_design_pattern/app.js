import ChatRoom from './classes/chatRoom.js';
import User from './classes/user.js';


// Instâncias da classe User 
const user1 = new User('João', 'JP1234', 'black');
const user2 = new User('Erika', 'Erikinha', 'red');
const user3 = new User('Jordana', "JojoTodynho", 'purple');

// Instancia a Classe Chatroom
const chatRoom = new ChatRoom();


// Adicionando usuários à sala de chat
chatRoom.addUser(user1);
chatRoom.sendMessage(`${user1.username} acabou de entrar no chat`);
chatRoom.addUser(user2);
chatRoom.sendMessage(`${user2.username} acabou de entrar no chat. Dê oi!`);
chatRoom.addUser(user3);
chatRoom.sendMessage(`${user3.username} acabou de entrar no chat`);

// Enviando mensagens
chatRoom.sendMessage('Oi glr do maaaal'); 
// User 1 2 e 3 receberam recebeu a mensagem

// Removendo um usuário. Esse usuário não recebe mais mensagens. Usuário removido foi Erika
chatRoom.removeUser(user2);

// Enviando outra mensagem
chatRoom.sendMessage('User 2 saiu do chat. ;('); 
// User 1 recebeu a mensagem: User 2 saiu do chat.
// User 3 recebeu a mensagem: User 2 saiu do chat.
