import { Server } from 'socket.io';

let io: Server;

export default function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    console.log('🔌 Socket.IO server starting...');
    io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('🟢 New client connected');

      socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('🔴 Client disconnected');
      });
    });
  }
  res.end();
}
