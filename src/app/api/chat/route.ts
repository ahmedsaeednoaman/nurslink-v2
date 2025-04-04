import { Server } from 'socket.io';

let io: Server;

export default function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    console.log('🔌 Chat WebSocket server starting...');
    io = new Server(res.socket.server, {
      path: '/api/chat/socket',
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('🟢 New chat client connected');

      socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg);
      });

      socket.on('disconnect', () => {
        console.log('🔴 Chat client disconnected');
      });
    });
  }
  res.end();
}
