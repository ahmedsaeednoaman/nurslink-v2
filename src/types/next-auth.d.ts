
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'NURSE' | 'HOSPITAL' | 'ADMIN';
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    role: 'NURSE' | 'HOSPITAL' | 'ADMIN';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: 'NURSE' | 'HOSPITAL' | 'ADMIN';
  }
}
