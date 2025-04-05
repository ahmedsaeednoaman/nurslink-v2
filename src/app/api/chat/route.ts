import { Server } from 'socket.io';
import { NextRequest } from 'next/server';

let io: Server | null = null;

export async function GET(req: NextRequest) {
  if (!io) {
    console.log('✅ Chat WebSocket server starting...');
    const { Server } = await import('socket.io');
    const { createServer } = await import('http');
    const httpServer = createServer();
    io = new Server(httpServer, { path: '/api/chat/socket' });

    io.on('connection', (socket) => {
      console.log('✅ New chat client connected');

      socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg);
      });

      socket.on('disconnect', () => {
        console.log('✅ Chat client disconnected');
      });
    });
  }

  return new Response('Socket Server is ready.', { status: 200 });
}
