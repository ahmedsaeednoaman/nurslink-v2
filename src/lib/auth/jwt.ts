import jwt from 'jsonwebtoken';

const JWT_SECRET = (process.env.JWT_SECRET as string) || 'your-secret-key';

export function signToken(payload: object, expiresIn: string = '15m') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
