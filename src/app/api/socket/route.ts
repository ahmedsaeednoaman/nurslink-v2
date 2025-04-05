import { Server } from 'socket.io';
import { NextRequest } from 'next/server';

let io: Server | null = null;

export async function GET(req: NextRequest) {
  if (!io) {
    console.log('✅ Socket.IO server starting...');
    const { Server } = await import('socket.io');
    const { createServer } = await import('http');
    const httpServer = createServer();
    io = new Server(httpServer, { path: '/api/socket' });

    io.on('connection', (socket) => {
      console.log('✅ New client connected');

      socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('✅ Client disconnected');
      });
    });
  }

  return new Response('Socket.IO Server is ready.', { status: 200 });
}
