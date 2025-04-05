import io from 'socket.io-client';

const chatSocket = io({
  path: '/api/chat/socket',
  autoConnect: false,
});

export default chatSocket;
